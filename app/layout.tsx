import type { Metadata, Viewport } from "next";
import "./globals.css";

const description =
  "I'm a software engineer. After hours I build small things that make every day a bit more fun: Dyno Chess, Adlib and a few tools for Claude Code.";

export const metadata: Metadata = {
  metadataBase: new URL("https://bixxter.com"),
  title: "Asatulla — software engineer",
  description,
  openGraph: {
    title: "Asatulla — software engineer",
    description,
    url: "/",
    images: "/og.png",
  },
  twitter: { card: "summary_large_image", creator: "@bixtter_" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
