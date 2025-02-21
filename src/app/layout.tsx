import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarDesktop } from "@/components/SidebarDesktop";
import { Sidebar } from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Sidebar></Sidebar>
        <main className="mx-5 mt-16 sm:ml-[350px] sm:mt-3">{children}</main>
      </body>{" "}
    </html>
  );
}
