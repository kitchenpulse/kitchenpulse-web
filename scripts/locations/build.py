import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from emit import write_cities
from generated import CITIES

write_cities(CITIES)
print("city count:", len(CITIES))
print("slugs:", [c["slug"] for c in CITIES])
