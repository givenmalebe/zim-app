export type Product = {
  id: string;
  name: string;
  edition: string;
  price: number;
  image: string;
  colorway: string;
  badge?: string;
  era: "1980s" | "1990s" | "2000s" | "SIGNATURE" | "LIMITED";
};

export const products: Product[] = [
  {
    id: "p1",
    name: "Independence 1980",
    edition: "1980 Home Kit",
    price: 85,
    image: "/images/product-jersey-1980-1.png",
    colorway: "Heritage White",
    era: "1980s",
  },
  {
    id: "p2",
    name: "Warriors 1985",
    edition: "1985 Away Kit",
    price: 80,
    image: "/images/product-jersey-1985-1.png",
    colorway: "Forest Green",
    era: "1980s",
  },
  {
    id: "p3",
    name: "Republic 1990",
    edition: "1990 Home Kit",
    price: 78,
    image: "/images/product-jersey-1990-1.png",
    colorway: "Marigold",
    era: "1990s",
  },
  {
    id: "p4",
    name: "Sable 1992",
    edition: "1992 Away Kit",
    price: 82,
    image: "/images/product-jersey-1992-1.png",
    colorway: "Carbon Black",
    era: "1990s",
  },
  {
    id: "p5",
    name: "Millennium 2002",
    edition: "2002 Home Kit",
    price: 88,
    image: "/images/product-jersey-2002-1.png",
    colorway: "Crimson Red",
    era: "2000s",
  },
  {
    id: "p6",
    name: "Dynasty 2004",
    edition: "2004 Away Kit",
    price: 90,
    image: "/images/product-jersey-2004-1.png",
    colorway: "Deep Navy",
    era: "2000s",
  },
  {
    id: "p7",
    name: "Signature Edition",
    edition: "Signature Series",
    price: 120,
    image: "/images/product-jersey-signature.png",
    colorway: "Heritage Cream",
    badge: "Signature",
    era: "SIGNATURE",
  },
  {
    id: "p8",
    name: "Limited Heritage",
    edition: "Limited / 100",
    price: 150,
    image: "/images/product-jersey-limited.png",
    colorway: "Vintage Maroon",
    badge: "Limited",
    era: "LIMITED",
  },
];

export const eraFilters = ["ALL", "1980s", "1990s", "2000s", "SIGNATURE", "LIMITED"] as const;

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
