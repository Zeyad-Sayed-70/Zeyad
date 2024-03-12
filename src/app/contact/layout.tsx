import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get in Touch with Zeyad Sayed | Contact Information",
  description:
    "Reach out to Zeyad Sayed for project inquiries, collaborations, or just to say hello. Find all the ways to connect with me here.",
  //   canonical: "https://www.johndoe.com/contact",
  openGraph: {
    url: "https://www.johndoe.com/contact",
    title: "Contact Zeyad Sayed",
    description:
      "Looking to connect with Zeyad Sayed? Find contact details, social media links, and a contact form on this page.",
    images: [
      {
        url: "https://www.johndoe.com/images/contact-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Zeyad Sayed",
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

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
