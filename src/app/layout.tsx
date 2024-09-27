import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cashubrew - Elixir Magic for Cashu",
  description:
    "Cashubrew: A magical implementation of the Cashu ecash protocol using Elixir",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black text-purple-100 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
