import "./globals.css";
import Layout from "@/layout/Layout";
import { vazir } from "@/utils/fonts";

export const metadata = {
  title: "املاک",
  description: "خرید و فروش املاک",
  icons: { icon: "./favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazir.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
