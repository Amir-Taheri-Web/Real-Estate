import Footer from "./Footer";
import Header from "./Header";
import styles from "@/styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
