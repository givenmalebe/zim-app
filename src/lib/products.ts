export type Product = {
  id: string;
  name: string;
  edition: string;
  price: number;
  image: string;
  colorway: string;
  badge?: string;
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
  },
  {
    id: "p2",
    name: "Independence Gold",
    edition: "1980 Edition",
    price: 80,
    image: "/images/product-jersey-green.png",
    colorway: "Forest Green",
  },
  {
    id: "p3",
    name: "Sable Noir",
    edition: "1992 Edition",
    price: 78,
    image: "/images/product-jersey-black.png",
    colorway: "Carbon Black",
    badge: "Limited",
  },
  {
    id: "p4",
    name: "Sunset Strip",
    edition: "2004 Edition",
    price: 72,
    image: "/images/product-jersey-yellow.png",
    colorway: "Marigold",
  },
  {
    id: "p5",
    name: "Flame Classic",
    edition: "1996 Edition",
    price: 76,
    image: "/images/product-jersey-red.png",
    colorway: "Crimson Red",
  },
  {
    id: "p6",
    name: "Pure Spirit",
    edition: "1985 Edition",
    price: 74,
    image: "/images/product-jersey-white.png",
    colorway: "Stadium White",
  },
  {
    id: "p7",
    name: "Midnight Glory",
    edition: "2002 Edition",
    price: 82,
    image: "/images/product-jersey-navy.png",
    colorway: "Deep Navy",
    badge: "New",
  },
  {
    id: "p8",
    name: "Heritage Maroon",
    edition: "1990 Edition",
    price: 79,
    image: "/images/product-jersey-maroon.png",
    colorway: "Vintage Maroon",
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
