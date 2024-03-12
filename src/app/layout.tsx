import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Common/Navbar/Navbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Zeyad Sayed | Full-Stack Developer Portfolio",
  description:
    "Discover the innovative world of Zeyad Sayed, a full-stack developer with a passion for creating impactful web applications. Dive into my portfolio to see projects, skills, and professional journey.",

  // canonical: "https://www.johndoe.com",
  openGraph: {
    url: "https://www.johndoe.com",
    title: "Zeyad Sayed Portfolio",
    description:
      "Showcasing the professional journey and projects of Zeyad Sayed, full-stack developer with expertise in modern web technologies.",
    images: [
      {
        url: "https://www.johndoe.com/images/portfolio-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Zeyad Sayed Portfolio Cover",
      },
    ],
    siteName: "Zeyad Sayed Portfolio",
  },
  twitter: {
    creator: "@JohnDoeDev",
    site: "@JohnDoeDev",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
