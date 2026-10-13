export type Legend = {
  name: string;
  role: string;
  quote: string;
  era: string;
  image: string;
  sport: "football" | "cricket" | "rugby";
  highlights: string[];
  realPhoto?: boolean;
  imagePosition?: string;
};

export const legends: Legend[] = [
  {
    name: "Peter Ndlovu",
    role: "Forward · Warriors Captain · Coventry & Sheffield United",
    quote:
      "When you put on that jersey, you carry the dreams of every kid kicking a ball on a dusty street.",
    era: "1992 — 2010",
    image: "/images/legend-peter-ndlovu.png",
    sport: "football",
    highlights: [
      "First African to play in the English Premier League (Coventry, 1992)",
      "25 goals in 135 apps for Sheffield United",
      "Captained Zimbabwe at 2004 & 2006 AFCON",
      "Began career at Highlanders FC, Bulawayo",
    ],
  },
  {
    name: "Moses Chunga",
    role: "Midfield Maestro · 'The Razorman'",
    quote:
      "The badge is heavier than it looks. That weight is the love of a nation.",
    era: "1980s — 1990s",
    image: "/images/legend-moses-chunga.png",
    sport: "football",
    highlights: [
      "Record 46 goals in a single season (1986) — still unbeaten",
      "Revered as one of Zimbabwe's greatest ever midfielders",
      "Dynamos FC legend and Zimbabwe international",
      "Born 17 October 1965",
    ],
  },
  {
    name: "Benjani Mwaruwari",
    role: "Striker · Portsmouth, Man City & Auxerre",
    quote:
      "We didn't play for the salary. We played so the next generation would believe.",
    era: "1999 — 2010",
    image: "/images/legend-benjani.png",
    sport: "football",
    realPhoto: true,
    highlights: [
      "First Zimbabwean to score in the UEFA Champions League",
      "Played for Auxerre, Portsmouth, Manchester City",
      "31 caps for Zimbabwe, 8+ international goals",
      "Born in Bulawayo, 13 August 1978",
    ],
  },
  {
    name: "Bruce Grobbelaar",
    role: "Goalkeeper · Liverpool Legend · Zimbabwe International",
    quote:
      "I was the kid from Bulawayo who walked out at Anfield. Anything is possible if you keep diving.",
    era: "1981 — 1994",
    image: "/images/legend-bruce-grobbelaar.png",
    sport: "football",
    realPhoto: true,
    highlights: [
      "628 appearances for Liverpool FC (1981–1994)",
      "6 League titles + 1 European Cup (1984)",
      "Famous 'wobbly legs' penalty saves in 1984 European Cup final",
      "Born in Durban, raised in Zimbabwe — Warriors international",
    ],
  },
  {
    name: "Andy Flower",
    role: "Wicketkeeper-Batsman · Zimbabwe Captain",
    quote:
      "Zimbabwe taught the cricketing world that heart can outplay handbooks.",
    era: "1992 — 2003",
    image: "/images/legend-andy-flower.png",
    sport: "cricket",
    realPhoto: true,
    highlights: [
      "63 Tests, 213 ODIs — over 11,500 international runs",
      "Holds Zimbabwe records: most Test runs, highest Test average",
      "Innings of 232* vs India (1995) — iconic unbeaten ton",
      "Captained Zimbabwe for over 10 years",
    ],
  },
  {
    name: "Heath Streak",
    role: "Fast Bowler · Zimbabwe Captain",
    quote:
      "Every ball I bowled carried the dust of Bulawayo with it. That never left me.",
    era: "1993 — 2005",
    image: "/images/legend-heath-streak.png",
    sport: "cricket",
    realPhoto: true,
    highlights: [
      "216 Test wickets in 65 matches — Zimbabwe's greatest",
      "Only Zimbabwean with 100+ Test wickets",
      "Completed the double: 2,000 runs + 200 ODI wickets",
      "Debuted vs Pakistan, became long-time bowling spearhead",
    ],
  },
  {
    name: "Grant Flower",
    role: "Opening Batsman · Zimbabwe Anchorman",
    quote:
      "We were the underdogs who refused to lie down. That's the Zimbabwe I'll always remember.",
    era: "1992 — 2010",
    image: "/images/legend-grant-flower.png",
    sport: "cricket",
    realPhoto: true,
    highlights: [
      "67 Tests and 221 ODIs for Zimbabwe",
      "Most successful opening batsman in Zimbabwe's history",
      "Scored 3 of his 6 Test centuries against the mighty Aussies",
      "Averaged over 40 against Australia — a rare feat",
    ],
  },
  {
    name: "Tatenda Taibu",
    role: "Wicketkeeper-Batsman · Youngest Test Captain",
    quote:
      "Keeping was never just about glovework — it was about carrying the hopes of the nation behind the stumps.",
    era: "2001 — 2012",
    image: "/images/legend-tatenda-taibu.jpg",
    sport: "cricket",
    realPhoto: true,
    imagePosition: "top",
    highlights: [
      "Youngest captain in Test cricket history (21 years old)",
      "Over 2,000 Test runs as Zimbabwe's first-choice keeper",
      "ICC Emerging Player of the Year (2001)",
      "Carried a rebuilding Chevrons side through the 2000s",
    ],
  },
  {
    name: "Tendai 'Beast' Mtawarira",
    role: "Loosehead Prop · Springbok Legend · Born in Harare",
    quote:
      "I carry Zimbabwe in my name and the world in my stride. The Beast never sleeps.",
    era: "2008 — 2019",
    image: "/images/legend-tendai-mtawarira.png",
    sport: "rugby",
    realPhoto: true,
    highlights: [
      "117 caps for South Africa Springboks — most capped prop",
      "2019 Rugby World Cup winner (vs England, final)",
      "Debuted 14 June 2008 vs Wales at Loftus Versfeld",
      "Born in Harare, Zimbabwe — 16 Test tries across 11 seasons",
    ],
  },
  {
    name: "Tsimba Brothers",
    role: "Backline Duo · Zimbabwe Sables",
    quote:
      "Two brothers, one badge — the Tsimba name is rugby royalty in Zimbabwe.",
    era: "1990s — 2000s",
    image: "/images/legend-tsimba-brothers.jpg",
    sport: "rugby",
    realPhoto: true,
    highlights: [
      "Kennedy & Gary Tsimba — brothers who wore the Sables badge",
      "Kennedy Tsimba starred for Zimbabwe and in South African club rugby",
      "Feared attacking partnership in Zimbabwean backline",
      "Named among the greats of Zimbabwean rugby",
    ],
  },
];
