import Footer from "./Footer";
import Header from "./Header";
import styles from "@/styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
