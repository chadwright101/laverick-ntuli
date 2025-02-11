import type { Metadata } from "next";
import "@/_styles/globals.css";
import { Header } from "@/_components/navigation/header/header";
import { Footer } from "@/_components/navigation/footer/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://laverickntuli.co.za"),
  title: "Contact Us - Laverick Ntuli Communications",
  description:
    "Laverick Ntuli Communications is flexible and dynamic, changing with latest global trends and embracing the latest innovations and digital technologies.",
  keywords:
    "B2B Digital Marketing Agency,Industrial Public Relations Services,Social Media Marketing, Corporate Communications,Digital Advertising Solutions,Mining Industry PR Specialists, Integrated Marketing Communications,Professional Photography Services,Corporate Event Management,Digital Content Creation,B2B Media Relations,Graphic Design Services,Professional Videography,Corporate Social Investment,Digital Media Monitoring,Online Marketing Analytics,B2B Advertising Agency,Marketing Campaign Coordination,Digital Brand Management, Industrial Marketing Specialists",
  openGraph: {
    description:
      "Laverick Ntuli Communications is flexible and dynamic, changing with latest global trends and embracing the latest innovations and digital technologies.",
    type: "website",
    locale: "en_ZA",
    siteName: "Laverick Ntuli Communications",
    images: [
      {
        url: "/images/open-graph-image.webp",
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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
