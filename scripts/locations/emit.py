"""Emit typed city modules from Python dicts and validate uniqueness."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path("/workspace/kitchenpulse-web/lib/locations/cities")
BANNED = re.compile(r"tier\s*[- ]?[23]|pre-negotiated|property counts", re.I)

SERVICE_KEYS = (
    "kitchen-hvac",
    "commercial-kitchen-equipment",
    "commercial-kitchen-fit-out",
)


def ts(value: str) -> str:
    return json.dumps(value, ensure_ascii=False)


def emit_notes(items: list[dict], pad: str) -> str:
    lines = ["["]
    for item in items:
        lines.append(
            f"{pad}  {{ title: {ts(item['title'])}, body: {ts(item['body'])} }},"
        )
    lines.append(f"{pad}]")
    return "\n".join(lines)


def emit_faqs(items: list[dict], pad: str) -> str:
    lines = ["["]
    for item in items:
        lines.append(f"{pad}  {{ q: {ts(item['q'])}, a: {ts(item['a'])} }},")
    lines.append(f"{pad}]")
    return "\n".join(lines)


def emit_service(page: dict, pad: str) -> str:
    inner = pad + "  "
    return "\n".join(
        [
            "{",
            f"{inner}title: {ts(page['title'])},",
            f"{inner}metaDescription: {ts(page['metaDescription'])},",
            f"{inner}h1: {ts(page['h1'])},",
            f"{inner}intro: {ts(page['intro'])},",
            f"{inner}contextHeading: {ts(page['contextHeading'])},",
            f"{inner}contextBody: {ts(page['contextBody'])},",
            f"{inner}areasIntro: {ts(page['areasIntro'])},",
            f"{inner}scopeHeading: {ts(page['scopeHeading'])},",
            f"{inner}scope: {emit_notes(page['scope'], inner)},",
            f"{inner}processHeading: {ts(page['processHeading'])},",
            f"{inner}process: {emit_notes(page['process'], inner)},",
            f"{inner}moreHeading: {ts(page['moreHeading'])},",
            f"{inner}moreBody: {ts(page['moreBody'])},",
            f"{inner}faqs: {emit_faqs(page['faqs'], inner)},",
            f"{inner}ctaHeading: {ts(page['ctaHeading'])},",
            f"{inner}ctaBody: {ts(page['ctaBody'])},",
            f"{inner}snapshots: {emit_notes(page['snapshots'], inner)},",
            f"{pad}}}",
        ]
    )


def emit_city(city: dict) -> str:
    hooks = city["serviceHooks"]
    hook_lines = ",\n    ".join(
        f'"{key}": {ts(hooks[key])}' for key in SERVICE_KEYS
    )
    service_blocks = []
    for key in SERVICE_KEYS:
        service_blocks.append(f'    "{key}": {emit_service(city["services"][key], "    ")},')
    nearby = ", ".join(ts(s) for s in city["nearby"])
    return f"""import type {{ CityPage }} from "../types";

const city = {{
  slug: {ts(city["slug"])},
  name: {ts(city["name"])},
  state: {ts(city["state"])},
  region: {ts(city["region"])},
  title: {ts(city["title"])},
  metaDescription: {ts(city["metaDescription"])},
  h1: {ts(city["h1"])},
  intro: {ts(city["intro"])},
  indexBlurb: {ts(city["indexBlurb"])},
  contextHeading: {ts(city["contextHeading"])},
  contextBody: {ts(city["contextBody"])},
  areasHeading: {ts(city["areasHeading"])},
  areas: {emit_notes(city["areas"], "  ")},
  howWeWorkHeading: {ts(city["howWeWorkHeading"])},
  howWeWorkBody: {ts(city["howWeWorkBody"])},
  serviceHooks: {{
    {hook_lines},
  }},
  faqs: {emit_faqs(city["faqs"], "  ")},
  ctaHeading: {ts(city["ctaHeading"])},
  ctaBody: {ts(city["ctaBody"])},
  nearby: [{nearby}],
  services: {{
{chr(10).join(service_blocks)}
  }},
}} satisfies CityPage;

export default city;
"""


def walk_strings(obj, prefix=""):
    if isinstance(obj, str):
        yield prefix, obj
    elif isinstance(obj, list):
        for i, item in enumerate(obj):
            yield from walk_strings(item, f"{prefix}[{i}]")
    elif isinstance(obj, dict):
        for key, value in obj.items():
            yield from walk_strings(value, f"{prefix}.{key}" if prefix else key)


def validate(cities: list[dict]) -> None:
    errors: list[str] = []
    slugs = [c["slug"] for c in cities]
    if len(slugs) != len(set(slugs)):
        errors.append("Duplicate city slugs")
    if len(cities) != 22:
        errors.append(f"Expected 22 cities, got {len(cities)}")

    intros: dict[str, str] = {}
    contexts: dict[str, str] = {}
    faqs: dict[str, str] = {}

    for city in cities:
        if set(city["services"]) != set(SERVICE_KEYS):
            errors.append(f"{city['slug']} missing services")
        if len(city["faqs"]) < 4:
            errors.append(f"{city['slug']} hub has fewer than 4 FAQs")
        if len(city["areas"]) < 5:
            errors.append(f"{city['slug']} has fewer than 5 areas")
        for path, text in walk_strings(city):
            if BANNED.search(text):
                errors.append(f"Banned wording in {city['slug']} {path}: {text[:80]}")
            if "we completed" in text.lower() or "case study" in text.lower():
                if "do not invent" not in text.lower() and "no fabricated" not in text.lower() and "do not invent city-by-city" not in text.lower():
                    # allow the disclaimer
                    if "invent" not in text.lower() and "listed on" not in text.lower():
                        errors.append(f"Possible invented case study in {city['slug']} {path}")
        intro_key = city["intro"].strip()
        if intro_key in intros:
            errors.append(f"Duplicate hub intro: {city['slug']} vs {intros[intro_key]}")
        intros[intro_key] = city["slug"]
        ctx_key = city["contextBody"].strip()
        if ctx_key in contexts:
            errors.append(f"Duplicate hub context: {city['slug']} vs {contexts[ctx_key]}")
        contexts[ctx_key] = city["slug"]
        for faq in city["faqs"]:
            if faq["q"] in faqs:
                errors.append(f"Duplicate FAQ Q: {faq['q']} ({city['slug']} vs {faqs[faq['q']]})")
            faqs[faq["q"]] = city["slug"]
        for key, page in city["services"].items():
            if len(page["faqs"]) < 4:
                errors.append(f"{city['slug']}/{key} has fewer than 4 FAQs")
            if len(page["scope"]) < 4:
                errors.append(f"{city['slug']}/{key} has fewer than 4 scope items")
            intro_id = f"{city['slug']}/{key}"
            if page["intro"] in intros:
                errors.append(f"Duplicate intro: {intro_id} vs {intros[page['intro']]}")
            intros[page["intro"]] = intro_id
            if page["contextBody"] in contexts:
                errors.append(f"Duplicate context: {intro_id} vs {contexts[page['contextBody']]}")
            contexts[page["contextBody"]] = intro_id
            for faq in page["faqs"]:
                if faq["q"] in faqs:
                    errors.append(
                        f"Duplicate FAQ Q: {faq['q']} ({intro_id} vs {faqs[faq['q']]})"
                    )
                faqs[faq["q"]] = intro_id

    if errors:
        raise SystemExit("Validation failed:\n- " + "\n- ".join(errors))


def write_cities(cities: list[dict]) -> None:
    validate(cities)
    ROOT.mkdir(parents=True, exist_ok=True)
    for old in ROOT.glob("*.ts"):
        old.unlink()
    imports = []
    exports = []
    for city in cities:
        ident = city["slug"].replace("-", "_")
        (ROOT / f"{city['slug']}.ts").write_text(emit_city(city))
        imports.append(f'import {ident} from "./{city["slug"]}";')
        exports.append(ident)
    (ROOT / "index.ts").write_text(
        'import type { CityPage } from "../types";\n'
        + "\n".join(imports)
        + "\n\nexport const CITIES: CityPage[] = [\n  "
        + ",\n  ".join(exports)
        + ",\n];\n"
    )
    print(f"Wrote {len(cities)} city modules to {ROOT}")
