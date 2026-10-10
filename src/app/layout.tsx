import type { Metadata, Viewport } from "next";
import { Atkinson_Hyperlegible_Next } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MotionRoot } from "@/components/motion";

const atkinson = Atkinson_Hyperlegible_Next({
  variable: "--font-atkinson",
  subsets: ["latin"],
  display: "swap",
  // Next ships no metric overrides for this face, so it cannot build an
  // adjusted fallback; say so instead of warning on every build.
  adjustFontFallback: false,
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crowninstituteoftheology.com"),
  title: {
    default: "Crown Institute of Theology",
    template: "%s | Crown Institute of Theology",
  },
  description:
    "An online Bible school and seminary for Kingdom New Covenant studies. Bachelor of Theology, Master of Theological Studies, Doctor of Ministry and Doctor of Theology.",
  icons: { icon: "/brand/crown.png" },
  openGraph: {
    title: "Crown Institute of Theology",
    description:
      "An online Bible school and seminary for Kingdom New Covenant studies.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#16130e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${atkinson.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-paper text-ink antialiased">
        <MotionRoot>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionRoot>
      </body>
    </html>
  );
}
