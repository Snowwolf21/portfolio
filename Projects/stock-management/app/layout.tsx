import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import StoreHydrator from "./components/StoreHydrator";
import AppShell from "./components/AppShell";

export const metadata: Metadata = {
  title: "StockFlow Dashboard",
  description: "Inventory, order, and analytics dashboard for stock operations.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <StoreHydrator />
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
