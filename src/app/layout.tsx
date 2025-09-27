import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./global.css";
import ReactQueryProvider from "@/lib/react-query/provider";
import { Toaster } from "sonner";

const montserrat = Montserrat({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spacetip",
  description: "Spacetip",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased tracking-tighter bg-neutral-50`}
      >
        <ReactQueryProvider>
          <Toaster richColors position="top-right" closeButton />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
