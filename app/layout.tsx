import type { Metadata } from "next";
import "@/_styles/globals.css";
import { Header } from "@/_components/navigation/header/header";
import { Footer } from "@/_components/navigation/footer/footer";

export const metadata: Metadata = {
  title: "Laverick Ntuli Communications",
  description:
    "Laverick Media Communications, now trading as Laverick Ntuli Communications, is flexible and dynamic, changing with latest global trends and embracing the latest innovations and digital technologies.",
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
