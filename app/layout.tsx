import type { Metadata } from "next";
import "./globals.css";
import { Work_Sans } from "next/font/google";
import 'easymde/dist/easymde.min.css'

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YC Directory",
  description: "Pitch, Vote, and Grow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
