import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from east_central import CITIES as EAST_CENTRAL
from emit import write_cities
from north import CITIES as NORTH
from south import CITIES as SOUTH
from west import CITIES as WEST

# Keep a stable, plan-aligned order within each region.
CITIES = WEST + NORTH + SOUTH + EAST_CENTRAL
write_cities(CITIES)
print("city count:", len(CITIES))
print("slugs:", [c["slug"] for c in CITIES])
