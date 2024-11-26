import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Loom UI",
  description: "Loom UI is a customizable opensource component library",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body
        className="flex flex-col min-h-screen"
        style={{
          backgroundImage: "",
        }}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
