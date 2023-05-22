import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import RHeader from "@/components/RHeader";
import RFooter from "@/components/RFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next App",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
})
{
  return (
    <html lang="en">
    <body className={inter.className}>
    <RHeader />
    <main>
      <div className="container">
        {children}
      </div>
    </main>
    <RFooter />
    </body>
    </html>
  );
}
