import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zeyad's Tech Blog | Insights and Innovations in Software Development",
  description:
    "Explore Zeyad's personal tech blog for the latest discussions on software development trends, coding tutorials, and industry insights. Join the conversation!",
  authors: [{ name: "Zeyad Sayed" }],
  keywords: [
    "tech blog",
    "software development",
    "coding tutorials",
    "Zeyad Sayed",
    "programming insights",
    "full stack development",
    "web development",
  ],
  openGraph: {
    url: "http://localhost:3000/blogs",
    title: "Zeyad's Tech Blog",
    description:
      "Explore Zeyad's personal tech blog for the latest discussions on software development trends, coding tutorials, and industry insights.",
    images: [
      {
        url: "https://www.blogherald.com/wp-content/uploads/2012/03/blog.jpg",
        width: 800,
        height: 600,
        alt: "Zeyad Sayed Blog Cover Image",
      },
    ],
    siteName: "Zeyad's Tech Blog",
  },
  twitter: {
    creatorId: "@ZeyadSayed",
    siteId: "@YourTwitterHandle",
    card: "summary_large_image",
  },
};

export default function BlogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
