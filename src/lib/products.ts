export type ProductStatus = "ARCHIVE" | "RESEARCH" | "COMING SOON" | "LICENSED";

export type Product = {
  id: string;
  name: string;
  edition: string;
  price: number;
  image: string;
  colorway: string;
  badge?: string;
  era: "1980s" | "1990s" | "2000s" | "SIGNATURE" | "LIMITED";
  sport: "Football" | "Cricket" | "Rugby";
  team: string;
  status: ProductStatus;
};

export const products: Product[] = [
  // 1980s — 4 jerseys
  {
    id: "p1",
    name: "Independence 1980",
    edition: "1980 Home Kit",
    price: 85,
    image: "/Soccer_jersey_with_bird_logo_2K_20260922205318.jpeg",
    colorway: "Heritage White",
    era: "1980s",
    sport: "Football",
    team: "Warriors (ZIFA)",
    status: "COMING SOON",
  },
  {
    id: "p2",
    name: "Warriors 1982",
    edition: "1982 Home Kit",
    price: 82,
    image: "/Soccer_jersey_with_bird_logo_2K_20260922205326.jpeg",
    colorway: "Marigold",
    era: "1980s",
    sport: "Football",
    team: "Warriors (ZIFA)",
    status: "COMING SOON",
  },
  {
    id: "p3",
    name: "Warriors 1985",
    edition: "1985 Away Kit",
    price: 80,
    image: "/Soccer_jersey_with_bird_logo_2K_20260922205338.jpeg",
    colorway: "Forest Green",
    era: "1980s",
    sport: "Football",
    team: "Warriors (ZIFA)",
    status: "COMING SOON",
  },
  {
    id: "p4",
    name: "Chevrons 1987",
    edition: "1987 Test Sweater",
    price: 95,
    image: "/Zimbabwe_cricket_jersey_from_1990s_2K_20260922205353.jpeg",
    colorway: "Cream Knit",
    era: "1980s",
    sport: "Cricket",
    team: "Chevrons (ZC)",
    status: "COMING SOON",
  },
  // 1990s — 4 jerseys
  {
    id: "p5",
    name: "Republic 1990",
    edition: "1990 Home Kit",
    price: 78,
    image: "/Soccer_jersey_with_bird_logo_2K_20260922205441.jpeg",
    colorway: "Marigold",
    era: "1990s",
    sport: "Football",
    team: "Warriors (ZIFA)",
    status: "COMING SOON",
  },
  {
    id: "p6",
    name: "Sables 1991",
    edition: "1991 Rugby Shirt",
    price: 98,
    image: "/Rugby_jersey_with_bird_logo_2K_20260922205620.jpeg",
    colorway: "White & Green Hoop",
    era: "1990s",
    sport: "Rugby",
    team: "Sables (ZRU)",
    status: "COMING SOON",
  },
  {
    id: "p7",
    name: "Sable 1992",
    edition: "1992 Away Kit",
    price: 82,
    image: "/Soccer_jersey_with_bird_logo_2K_20260922205452.jpeg",
    colorway: "Carbon Black",
    era: "1990s",
    sport: "Football",
    team: "Warriors (ZIFA)",
    status: "COMING SOON",
  },
  {
    id: "p8",
    name: "Chevrons 1995",
    edition: "1995 ODI Kit",
    price: 88,
    image: "/Zimbabwe_cricket_jersey_from_1990s_2K_20260922205402.jpeg",
    colorway: "White & Zigzag",
    era: "1990s",
    sport: "Cricket",
    team: "Chevrons (ZC)",
    status: "COMING SOON",
  },
  // 2000s — 4 jerseys
  {
    id: "p9",
    name: "Millennium 2002",
    edition: "2002 ODI Kit",
    price: 88,
    image: "/Cricket_jersey_logo_design_2K_20260922205421.jpeg",
    colorway: "Crimson Red",
    era: "2000s",
    sport: "Cricket",
    team: "Chevrons (ZC)",
    status: "COMING SOON",
  },
  {
    id: "p10",
    name: "Dynasty 2004",
    edition: "2004 ODI Kit",
    price: 90,
    image: "/Zimbabwe_cricket_jersey_logo_2K_20260922205412.jpeg",
    colorway: "Deep Navy",
    era: "2000s",
    sport: "Cricket",
    team: "Chevrons (ZC)",
    status: "COMING SOON",
  },
  {
    id: "p11",
    name: "Warriors 2006",
    edition: "2006 Home Kit",
    price: 84,
    image: "/Sport_jersey_with_bird_logo_2K_20260922205303.jpeg",
    colorway: "Forest Green",
    era: "2000s",
    sport: "Football",
    team: "Warriors (ZIFA)",
    status: "COMING SOON",
  },
  {
    id: "p12",
    name: "Sables 2008",
    edition: "2008 Away Kit",
    price: 102,
    image: "/Rugby_jersey_with_bird_logo_2K_20260922205634.jpeg",
    colorway: "Carbon Black",
    era: "2000s",
    sport: "Rugby",
    team: "Sables (ZRU)",
    status: "COMING SOON",
  },
  // Signature — 2 jerseys
  {
    id: "p13",
    name: "Sables Signature",
    edition: "Signature Series",
    price: 120,
    image: "/Zimbabwe_rugby_bird_logo_jersey_2K_20260922205626.jpeg",
    colorway: "Heritage Cream",
    badge: "Signature",
    era: "SIGNATURE",
    sport: "Rugby",
    team: "Sables (ZRU)",
    status: "COMING SOON",
  },
  {
    id: "p14",
    name: "Chevrons Signature",
    edition: "Signature Series",
    price: 125,
    image: "/Zimbabwe_cricket_jersey_logo_2K_20260922205504.jpeg",
    colorway: "Heritage Cream",
    badge: "Signature",
    era: "SIGNATURE",
    sport: "Cricket",
    team: "Chevrons (ZC)",
    status: "COMING SOON",
  },
  // Limited — 2 jerseys
  {
    id: "p15",
    name: "Chevrons Limited",
    edition: "Limited / 100",
    price: 150,
    image: "/Cricket_jersey_with_bird_logo_2K_20260922205430.jpeg",
    colorway: "Vintage Maroon",
    badge: "Limited",
    era: "LIMITED",
    sport: "Cricket",
    team: "Chevrons (ZC)",
    status: "COMING SOON",
  },
  {
    id: "p16",
    name: "Warriors Limited",
    edition: "Limited / 100",
    price: 145,
    image: "/Sport_jersey_with_bird_logo_2K_20260922205253.jpeg",
    colorway: "Vintage Maroon",
    badge: "Limited",
    era: "LIMITED",
    sport: "Football",
    team: "Warriors (ZIFA)",
    status: "COMING SOON",
  },
];

export const eraFilters = ["ALL", "1980s", "1990s", "2000s", "SIGNATURE", "LIMITED"] as const;
export const sportFilters = ["ALL", "Football", "Cricket", "Rugby"] as const;

export const lifestyleImages = [
  {
    src: "/images/lifestyle-boys-pitch.jpg",
    alt: "Six boys in throwback jerseys with TJ logo standing on a sunny soccer pitch",
    caption: "Young Supporters · Football Pitches",
  },
  {
    src: "/images/lifestyle-group-men.jpg",
    alt: "Five men wearing Throwback Jersey apparel with TJ logo in an urban alley",
    caption: "From the Archive to the Streets",
  },
];

export const navItems = [
  "HOME",
  "OUR STORY",
  "COLLECTIONS",
  "FANATICS COOLER",
  "LEGENDS",
  "IMPACT",
  "JOURNAL",
  "CONTACT",
];

export const features = [
  {
    icon: "trophy",
    num: "01",
    pillar: "REMEMBER",
    title: "ICONIC MOMENTS",
    subtitle: "Never Forgotten",
  },
  {
    icon: "people",
    num: "02",
    pillar: "HONOUR",
    title: "LEGENDARY PLAYERS",
    subtitle: "Always Inspiring",
  },
  {
    icon: "flag",
    num: "03",
    pillar: "BELONG",
    title: "PROUD NATION",
    subtitle: "Forever United",
  },
  {
    icon: "heart",
    num: "04",
    pillar: "BUILD",
    title: "BRIGHTER FUTURES",
    subtitle: "Powered by Football",
  },
];
