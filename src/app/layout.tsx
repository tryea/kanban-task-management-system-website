import React from "react";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans as PlusJakartaSans } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "../components/theme-provider";

const plusJakartaSans = PlusJakartaSans({
  weight: ["700", "500"], // Specify the needed font weights
  preload: false,
});

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
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
