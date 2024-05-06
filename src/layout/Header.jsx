import Link from "next/link";
import styles from "@/styles/Header.module.css";
import HeaderLogin from "@/modules/HeaderLogin";
import BurgerMenu from "@/modules/BurgerMenu";

const Header = async () => {
  return (
    <header className={styles.header}>
      <div>
        <h1>
          <Link href="/">املاک | مشاوره و خرید</Link>
        </h1>

        <ul>
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>

          <li>
            <Link href="/profiles">آگهی ها</Link>
          </li>
        </ul>

        <HeaderLogin />

        <div className={styles.menu}>
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
