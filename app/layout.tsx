import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SocioHeads",
  description: "Grow your business with SocioHeads.",
  openGraph: {
    images: [
      {
        url: "/logo/favicon.ico",
        width: 1200,
        height: 630,
        alt: "SocioHeads Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo/favicon.ico" />
      </head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
