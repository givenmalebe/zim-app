"""Extract Cooler Corner product images from the source deck.

Indexing is per-slide (p1, p2, ...) on purpose. A global counter makes the
second PICTURE shape on slides 3 and 6 overwrite the first, because both would
resolve to the same filename.
"""

import os
import sys

from pptx import Presentation

SOURCE = "assets/decks/Cooler Corner.pptx"
DEST = "public/images/cooler"

# slide number -> output filename, in shape order within that slide
NAMES = {
    (3, 1): "dream-team-fanatics-green.png",
    (3, 2): "zimbabwe-dream-team.png",
    (4, 1): "dream-team-bottle.png",
    (5, 1): "zim-cricket-fanatic.png",
    (6, 1): "caps-united-fanatics.png",
    (6, 2): "highlanders-fc-100-years.png",
    (7, 1): "collection-lineup.png",
}


def main() -> int:
    prs = Presentation(SOURCE)
    os.makedirs(DEST, exist_ok=True)

    for slide_no, slide in enumerate(prs.slides, 1):
        index = [0]

        def walk(shapes):
            for shape in shapes:
                if shape.shape_type == 6:  # GROUP
                    walk(shape.shapes)
                    continue
                if shape.shape_type != 13:  # not a PICTURE
                    continue
                index[0] += 1
                key = (slide_no, index[0])
                if key not in NAMES:
                    continue
                target = os.path.join(DEST, NAMES[key])
                with open(target, "wb") as handle:
                    handle.write(shape.image.blob)
                print(
                    "slide %d img %d -> %s (%d bytes)"
                    % (slide_no, index[0], target, os.path.getsize(target))
                )

        walk(slide.shapes)

    missing = [
        name for name in NAMES.values()
        if not os.path.exists(os.path.join(DEST, name))
    ]
    if missing:
        print("MISSING: %s" % ", ".join(missing))
        return 1

    print("OK - all %d images written to %s" % (len(NAMES), DEST))
    return 0


if __name__ == "__main__":
    sys.exit(main())