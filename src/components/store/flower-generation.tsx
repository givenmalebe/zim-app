'use client';

import HeritageFeature from "@/components/store/heritage-feature";

export default function FlowerGeneration() {
  return (
    <HeritageFeature
      id="the-flower-generation"
      number="No. 02"
      headline={
        <>
          THE FLOWER
          <br />
          GENERATION
        </>
      }
      subline="Andy & Grant Flower. Zimbabwe cricket in the era the world began taking notice."
      body={[
        "Between 1992 and 2003, Zimbabwean cricket grew up in public. Two brothers carried the innings — Andy at the crease, Grant at his side — and a nation began to expect cricket's heavyweights to be beaten.",
        "The white of the Zimbabwe Cricket kit, the crest on the chest, the brothers who made the Chevrons a side touring giants feared. That is why the Flower era lives in the archive: not as nostalgia, but as the moment Zimbabwe cricket came of age.",
      ]}
      image="/images/editorial-flower-brothers.jpeg"
      imageAlt="Andy and Grant Flower — the Flower Generation, Zimbabwe cricket"
      placecard="THE FLOWER GENERATION"
      placecardNote="Andy & Grant · Zimbabwe Cricket"
      ctaLabel="Explore the Archive"
      ctaHref="#collection"
      tag="Chevrons 1995 · Coming Soon"
      steps={["Archive Photograph", "Original Jersey", "Story", "Recreation"]}
    />
  );
}