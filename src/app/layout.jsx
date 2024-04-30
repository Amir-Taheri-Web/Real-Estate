import localFont from "next/font/local";
import "./globals.css";
import Layout from "@/layout/Layout";

const vazir = localFont({
  src: [
    {
      path: "../../public/fonts/Vazir-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazir-Light.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazir-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazir-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

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
