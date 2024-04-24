import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { PrismicPreview } from "@prismicio/next";
import { createClient, repositoryName } from "@/prismicio";

const jakartasans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clarisse Bucu · Creative Developer",
  description: "Clarisse Bucu's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-100 text-slate-700">
      <body className={jakartasans.className}>{children}</body>
      <PrismicPreview repositoryName = {repositoryName} />
    </html>
  );
}
