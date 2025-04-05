// app/layout.tsx
import "./globals.css";
import Header from "./components/Header";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "StackOverflow Clone",
  description: "Ask, Answer and Learn.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
