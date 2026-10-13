'use client';

import HeritageFeature from "@/components/store/heritage-feature";

export default function ShirtThatRemembers() {
  return (
    <HeritageFeature
      id="the-shirt-that-remembers"
      number="No. 01"
      headline={
        <>
          THE SHIRT
          <br />
          THAT REMEMBERS
        </>
      }
      subline="Bruce Grobbelaar. Zimbabwe. The 1990s."
      body={[
        "In the 1990s, Zimbabwean football had a goalkeeper whose name was known around the world — Bruce Grobbelaar.",
        "Having grown up playing football in Zimbabwe, Grobbelaar returned to represent his country wearing a goalkeeper jersey that was impossible to forget: bold, colourful and unmistakably Zimbabwean.",
        "This is the story behind Chapter 001.",
        "Not simply a jersey, but a piece of a football era — recreated to preserve the memory of the player, the shirt and the moments that made Zimbabwean sport unforgettable.",
      ]}
      image="/images/editorial-bruce-grobbelaar.jpeg"
      imageAlt="Bruce Grobbelaar — Bulawayo to Anfield, the shirt that remembers"
      placecard="THE 1990s GOALKEEPER SHIRT"
      placecardNote="Zimbabwe Heritage"
      ctaLabel="Explore the Archive"
      ctaHref="#collection"
      tag="The Republic 1990 · Coming Soon"
    />
  );
}