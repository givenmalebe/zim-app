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
};

export const products: Product[] = [
  // 1980s — 4 jerseys
  {
    id: "p1",
    name: "Independence 1980",
    edition: "1980 Home Kit",
    price: 85,
    image: "/images/product-jersey-1980-1.png",
    colorway: "Heritage White",
    era: "1980s",
    sport: "Football",
    team: "Warriors (ZIFA)",
  },
  {
    id: "p2",
    name: "Warriors 1982",
    edition: "1982 Home Kit",
    price: 82,
    image: "/images/product-jersey-1982-1.png",
    colorway: "Marigold",
    era: "1980s",
    sport: "Football",
    team: "Warriors (ZIFA)",
  },
  {
    id: "p3",
    name: "Warriors 1985",
    edition: "1985 Away Kit",
    price: 80,
    image: "/images/product-jersey-1985-1.png",
    colorway: "Forest Green",
    era: "1980s",
    sport: "Football",
    team: "Warriors (ZIFA)",
  },
  {
    id: "p4",
    name: "Chevrons 1987",
    edition: "1987 Test Sweater",
    price: 95,
    image: "/images/product-jersey-1987-1.png",
    colorway: "Cream Knit",
    era: "1980s",
    sport: "Cricket",
    team: "Chevrons (ZC)",
  },
  // 1990s — 4 jerseys
  {
    id: "p5",
    name: "Republic 1990",
    edition: "1990 Home Kit",
    price: 78,
    image: "/images/product-jersey-1990-1.png",
    colorway: "Marigold",
    era: "1990s",
    sport: "Football",
    team: "Warriors (ZIFA)",
  },
  {
    id: "p6",
    name: "Sables 1991",
    edition: "1991 Rugby Shirt",
    price: 98,
    image: "/images/product-jersey-1991-1.png",
    colorway: "White & Green Hoop",
    era: "1990s",
    sport: "Rugby",
    team: "Sables (ZRU)",
  },
  {
    id: "p7",
    name: "Sable 1992",
    edition: "1992 Away Kit",
    price: 82,
    image: "/images/product-jersey-1992-1.png",
    colorway: "Carbon Black",
    era: "1990s",
    sport: "Football",
    team: "Warriors (ZIFA)",
  },
  {
    id: "p8",
    name: "Chevrons 1995",
    edition: "1995 ODI Kit",
    price: 88,
    image: "/images/product-jersey-1995-1.png",
    colorway: "White & Zigzag",
    era: "1990s",
    sport: "Cricket",
    team: "Chevrons (ZC)",
  },
  // 2000s — 4 jerseys
  {
    id: "p9",
    name: "Millennium 2002",
    edition: "2002 ODI Kit",
    price: 88,
    image: "/images/product-jersey-2002-1.png",
    colorway: "Crimson Red",
    era: "2000s",
    sport: "Cricket",
    team: "Chevrons (ZC)",
  },
  {
    id: "p10",
    name: "Dynasty 2004",
    edition: "2004 ODI Kit",
    price: 90,
    image: "/images/product-jersey-2004-1.png",
    colorway: "Deep Navy",
    era: "2000s",
    sport: "Cricket",
    team: "Chevrons (ZC)",
  },
  {
    id: "p11",
    name: "Warriors 2006",
    edition: "2006 Home Kit",
    price: 84,
    image: "/images/product-jersey-2006-1.png",
    colorway: "Forest Green",
    era: "2000s",
    sport: "Football",
    team: "Warriors (ZIFA)",
  },
  {
    id: "p12",
    name: "Sables 2008",
    edition: "2008 Away Kit",
    price: 102,
    image: "/images/product-jersey-2008-1.png",
    colorway: "Carbon Black",
    era: "2000s",
    sport: "Rugby",
    team: "Sables (ZRU)",
  },
  // Signature — 2 jerseys
  {
    id: "p13",
    name: "Sables Signature",
    edition: "Signature Series",
    price: 120,
    image: "/images/product-jersey-signature.png",
    colorway: "Heritage Cream",
    badge: "Signature",
    era: "SIGNATURE",
    sport: "Rugby",
    team: "Sables (ZRU)",
  },
  {
    id: "p14",
    name: "Chevrons Signature",
    edition: "Signature Series",
    price: 125,
    image: "/images/product-jersey-signature-cricket.png",
    colorway: "Heritage Cream",
    badge: "Signature",
    era: "SIGNATURE",
    sport: "Cricket",
    team: "Chevrons (ZC)",
  },
  // Limited — 2 jerseys
  {
    id: "p15",
    name: "Chevrons Limited",
    edition: "Limited / 100",
    price: 150,
    image: "/images/product-jersey-limited.png",
    colorway: "Vintage Maroon",
    badge: "Limited",
    era: "LIMITED",
    sport: "Cricket",
    team: "Chevrons (ZC)",
  },
  {
    id: "p16",
    name: "Warriors Limited",
    edition: "Limited / 100",
    price: 145,
    image: "/images/product-jersey-limited-football.png",
    colorway: "Vintage Maroon",
    badge: "Limited",
    era: "LIMITED",
    sport: "Football",
    team: "Warriors (ZIFA)",
  },
];

export const eraFilters = ["ALL", "1980s", "1990s", "2000s", "SIGNATURE", "LIMITED"] as const;
export const sportFilters = ["ALL", "Football", "Cricket", "Rugby"] as const;

export const lifestyleImages = [
  {
    src: "/images/lifestyle-boys-pitch.jpg",
    alt: "Six boys in throwback jerseys with TJ logo standing on a sunny soccer pitch",
    caption: "Next Generation · Pitch Session",
  },
  {
    src: "/images/lifestyle-group-men.jpg",
    alt: "Five men wearing Throwback Jersey apparel with TJ logo in an urban alley",
    caption: "The Crew · Street Editorial",
  },
  {
    src: "/images/lifestyle-boys-bleachers.jpg",
    alt: "Six boys near wooden bleachers wearing jerseys with the TJ shield logo on the chest",
    caption: "Heritage Day · Bleachers",
  },
  {
    src: "/images/lifestyle-men-street.jpg",
    alt: "Three stylish men on a city street wearing Throwback Jersey apparel with TJ logo",
    caption: "Golden Hour · City Streets",
  },
  {
    src: "/images/lifestyle-two-men-brick.jpg",
    alt: "Two men posing against a brick wall wearing apparel with the TJ logo on the chest",
    caption: "Brothers · Brick Wall",
  },
  {
    src: "/images/lifestyle-black-jersey.jpg",
    alt: "Single young man in a black retro jersey with the TJ shield logo embroidered on the chest",
    caption: "Solo Shot · Sable Noir",
  },
];

export const navItems = [
  "HOME",
  "OUR STORY",
  "COLLECTIONS",
  "LEGENDS",
  "IMPACT",
  "JOURNAL",
  "CONTACT",
];

export const features = [
  {
    icon: "trophy",
    title: "ICONIC MOMENTS",
    subtitle: "Never Forgotten",
  },
  {
    icon: "people",
    title: "LEGENDARY PLAYERS",
    subtitle: "Always Inspiring",
  },
  {
    icon: "flag",
    title: "PROUD NATION",
    subtitle: "Forever United",
  },
  {
    icon: "heart",
    title: "BRIGHTER FUTURES",
    subtitle: "Powered by Football",
  },
];
