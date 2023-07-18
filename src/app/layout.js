import { Suspense } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "@/Components/Navigation-events";
import Header from "@/Components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "A frontend practice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Suspense fallback={null}>
          <Navigation />
        </Suspense>
      </body>
    </html>
  );
}
