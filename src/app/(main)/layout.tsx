import { Alumni_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import VerticalSeparator from "@/components/Separator/VerticalSeparator";
import Socials from "@/components/Socials";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieBanner from "@/components/CookieBanner/CookieBanner";
import AgeGuard from "@/components/AgeGuard";

const alumniSans = Alumni_Sans({
  subsets: ["latin"],
  variable: "--font-family",
});

export const metadata = {
  title:
    "TenTen Cannabis Social Club Heilbronn e.V. | Cannabis-Community in Heilbronn",
  description:
    "Willkommen beim TenTen Cannabis Social Club Heilbronn e.V. – Ihr Anlaufpunkt für Cannabis-Informationen, -Aufklärung und -Community in Heilbronn. Werden Sie noch heute Teil unserer Gemeinschaft!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_MEASUREMENT_ID="G-GV1MVJLQV5" />
      <body className={alumniSans.className}>
        <Navigation />

        <div id="page-wrap">
          {children}

          <VerticalSeparator size="32px" />
          <Socials />

          <VerticalSeparator size="32px" />
          <Footer />

          <AgeGuard />
          <CookieBanner />
        </div>
      </body>
    </html>
  );
}
