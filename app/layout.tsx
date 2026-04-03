import type { Metadata } from "next";
import { Geist, Geist_Mono, Great_Vibes } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-signature",
  subsets: ["latin"],
});
import { ChapterNav } from "./components/ChapterNav";
import { Footer } from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Angelo Perez | Finance, Leadership & Cultural Advocacy",
    template: "%s | Angelo Perez",
  },
  description:
    "Finance student at UIUC (Gies Scholar) | Real Estate PE Intern @ Project Destined | Greenwood Project Scholar. Leadership, entrepreneurship, and advocacy for Latino representation in finance.",
  openGraph: {
    type: "website",
  },
  metadataBase: new URL("https://angelo-website-nine.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} font-sans antialiased bg-background text-foreground min-h-screen`}
      >
        <ChapterNav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
