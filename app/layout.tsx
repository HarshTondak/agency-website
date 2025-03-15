import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Socioheads",
  description: "Grow your business with Socioheads.",
  openGraph: {
    images: [
      {
        url: "/logo/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Socioheads Logo",
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
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SZ9MGM35PD"
        ></Script>
        <Script id="google-analytics">
          {`  
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-SZ9MGM35PD');
          `}
        </Script>
      </head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
