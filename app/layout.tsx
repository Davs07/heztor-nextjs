import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Heztor",
  description: "Gestiona todo en un solo lugar.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/Heztor.svg",
        href: "/Heztor.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/Heztor.svg",
        href: "/Heztor.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="es" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased overflow-y-auto",
            fontSans.variable
          )}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
