import Link from "next/link";
import { PiSignInBold } from "react-icons/pi";

const Header = () => {
  return (
    <header>
      <h1>
        <Link href="/">املاک</Link>
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
          ورود/ثبت نام
          <PiSignInBold />
        </Link>
      </button>
    </header>
  );
};

export default Header;
