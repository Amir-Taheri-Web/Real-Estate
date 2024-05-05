import "./globals.css";
import Layout from "@/layout/Layout";
import SessionProviders from "@/providers/SessionProviders";
import { vazir } from "@/utils/fonts";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "املاک",
  description: "(ویلا، مغازه، آپارتمان، دفتر)خرید و فروش املاک",
  icons: { icon: "./favicon.ico" },
  authors: [{ name: "Amir Taheri", url: "https://github.com/Amir-Taheri-Web" }],
  keywords: ["املاک", "ویلا", "آپارتمان", "مغازه", "دفتر", "فروش", "خرید", "آگهی"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazir.className}>
        <SessionProviders>
          <Layout>{children}</Layout>
        </SessionProviders>

        <Toaster />
      </body>
    </html>
  );
}
