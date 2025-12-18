import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});


export const metadata: Metadata = {
  title: "Adeyemi Akitoye — Cybersecurity Engineer & CTO",
  description: "Cybersecurity engineer, full-stack developer, and CTO building secure, scalable digital platforms.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <Nav />
        <div
          id="theme-root"
          className="min-h-screen transition-[opacity,transform] duration-300 ease-out"
        >
        
          <main className="pt-16">{children}</main>
        </div>
      </body>
    </html>
  );
}
