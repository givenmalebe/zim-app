import type { Metadata } from "next";
import { Bebas_Neue, Pacifico, Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Throwback Jersey — Wear The Legacy",
  description:
    "Throwback Jersey brings Zimbabwe's unforgettable football moments back to life — so you can wear the legacy. Heritage jerseys rooted in passion, unity and pride.",
  keywords: [
    "Throwback Jersey",
    "Zimbabwe",
    "football",
    "retro jersey",
    "heritage",
    "Wear the Legacy",
  ],
  authors: [{ name: "Throwback Jersey" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Throwback Jersey — Wear The Legacy",
    description:
      "More than a jersey. It's our story. Zimbabwe's sporting heritage, reborn.",
    siteName: "Throwback Jersey",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bebasNeue.variable} ${pacifico.variable} ${montserrat.variable} ${openSans.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
