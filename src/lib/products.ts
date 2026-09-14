export type Product = {
  id: string;
  name: string;
  edition: string;
  price: number;
  image: string;
  colorway: string;
  badge?: string;
  category: "jersey" | "lifestyle";
};

export const products: Product[] = [
  {
    id: "p1",
    name: "Warriors Heritage",
    edition: "1980 Edition",
    price: 75,
    image: "/images/product-jersey-grey.png",
    colorway: "Heather Grey",
    badge: "Signature",
    category: "jersey",
  },
  {
    id: "p2",
    name: "Independence Gold",
    edition: "1980 Edition",
    price: 80,
    image: "/images/product-jersey-green.png",
    colorway: "Forest Green",
    category: "jersey",
  },
  {
    id: "p3",
    name: "Sable Noir",
    edition: "1992 Edition",
    price: 78,
    image: "/images/product-jersey-black.png",
    colorway: "Carbon Black",
    badge: "Limited",
    category: "jersey",
  },
  {
    id: "p4",
    name: "Sunset Strip",
    edition: "2004 Edition",
    price: 72,
    image: "/images/product-jersey-yellow.png",
    colorway: "Marigold",
    category: "jersey",
  },
  {
    id: "p5",
    name: "Flame Classic",
    edition: "1996 Edition",
    price: 76,
    image: "/images/product-jersey-red.png",
    colorway: "Crimson Red",
    category: "jersey",
  },
  {
    id: "p6",
    name: "Pure Spirit",
    edition: "1985 Edition",
    price: 74,
    image: "/images/product-jersey-white.png",
    colorway: "Stadium White",
    category: "jersey",
  },
  {
    id: "p7",
    name: "Midnight Glory",
    edition: "2002 Edition",
    price: 82,
    image: "/images/product-jersey-navy.png",
    colorway: "Deep Navy",
    badge: "New",
    category: "jersey",
  },
  {
    id: "p8",
    name: "Heritage Maroon",
    edition: "1990 Edition",
    price: 79,
    image: "/images/product-jersey-maroon.png",
    colorway: "Vintage Maroon",
    category: "jersey",
  },
];

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
