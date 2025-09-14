import type { Metadata } from "next";
import { CssBaseline } from "@mui/material";
import ThemeRegistry from "@/components/providers/ThemeRegistry";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Travel Booking",
  description: "Your world of joy",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ThemeRegistry>
          <CssBaseline />
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
