import Link from "next/link";
import { PiSignInBold } from "react-icons/pi";
import styles from "@/styles/Header.module.css";

const Header = () => {
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

        <button type="button">
          <Link href="/signin">
            <PiSignInBold />
            ورود/ثبت نام
          </Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
