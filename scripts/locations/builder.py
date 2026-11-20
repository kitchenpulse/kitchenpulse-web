
from __future__ import annotations

def notes(*pairs):
    return [{"title": t, "body": b} for t, b in pairs]

def faqs(*pairs):
    return [{"q": q, "a": a} for q, a in pairs]

def service(**kwargs):
    required = [
        "title","metaDescription","h1","intro","contextHeading","contextBody",
        "areasIntro","scopeHeading","scope","processHeading","process",
        "moreHeading","moreBody","faqs","ctaHeading","ctaBody","snapshots",
    ]
    missing = [k for k in required if k not in kwargs]
    if missing:
        raise ValueError(f"service missing {missing}")
    return kwargs
