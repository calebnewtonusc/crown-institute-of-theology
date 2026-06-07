import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crowninstituteoftheology.com"),
  title: {
    default: "Crown Institute of Theology",
    template: "%s | Crown Institute of Theology",
  },
  description:
    "An online Bible school and seminary for Kingdom New Covenant studies. Bachelor, Master, and Doctoral theology degrees rooted in biblical exegesis and the present reign of Christ.",
  icons: { icon: "/brand/icon.png" },
  openGraph: {
    title: "Crown Institute of Theology",
    description:
      "An online Bible school and seminary for Kingdom New Covenant studies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-background text-ink">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
