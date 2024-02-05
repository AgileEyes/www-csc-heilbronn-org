import './styles.css'
import { Maven_Pro } from "next/font/google";

const mavenPro = Maven_Pro({ subsets: ["latin"] });

export const metadata = {
  title: "TenTen eFlyer",
  description: "One-Pager über uns!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      style={{ backgroundColor: "#000000", padding: 0, margin: 0 }}
      className={mavenPro.className}
    >
      <body style={{ padding: 0, margin: 0 }}>{children}</body>
    </html>
  );
}
