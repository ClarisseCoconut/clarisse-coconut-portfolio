import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { PrismicPreview } from "@prismicio/next";
import { createClient, repositoryName } from "@/prismicio";

const jakartasans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return {
    title: settings.data.meta_title,
    description: settings.data.meta_description,
  };
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
