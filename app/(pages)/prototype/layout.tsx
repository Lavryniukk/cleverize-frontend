import "@/app/globals.css";
import HomeButton from "@/app/UI/buttons/backBtn/BackButton";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  variable: "--roboto-font",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omniscient",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} overflow-auto `}>
      <body>
        <HomeButton />
        {children}
      </body>
    </html>
  );
}
