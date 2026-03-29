import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Cafe Aura | Premium Coffee House",
  description:
    "Discover hand-roasted blends, artisan pastries, and exclusive monthly memberships at Cafe Aura. Crafted with passion for the ultimate coffee experience.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.pn",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.pn",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.sv",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.pn",
  },
};

export const viewport: Viewport = {
  themeColor: "#1C1917",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
