"use client";

import { slide as Menu } from "react-burger-menu";
import Link from "next/link";

const BurgerMenu = () => {
  return (
    <Menu>
      <ul>
        <li>
          <Link href="/">صفحه اصلی</Link>
        </li>

        <li>
          <Link href="/profiles">آگهی ها</Link>
        </li>
      </ul>
    </Menu>
  );
};

export default BurgerMenu;
