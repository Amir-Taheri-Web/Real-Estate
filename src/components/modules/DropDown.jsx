"use client";

import Link from "next/link";
import styles from "@/styles/DropDown.module.css";
import { useState } from "react";
import { AiOutlineCaretLeft } from "react-icons/ai";
import { categories, categoriesIcons } from "@/constants/categories";

const DropDown = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        دسته بندی:
        <AiOutlineCaretLeft className={isOpen ? styles.buttonOpen : null} />
        <span className={styles.category}>
          {category ? categories[category] : "همه"}
        </span>
      </button>

      <ul
        className={isOpen ? styles.open : styles.close}
        onClick={() => setIsOpen(false)}
      >
        <li>
          <Link href="/profiles">{categoriesIcons.all}همه</Link>
        </li>

        <li>
          <Link href={{ pathname: "/profiles", query: { category: "villa" } }}>
            {categoriesIcons.villa}
            ویلا
          </Link>
        </li>

        <li>
          <Link
            href={{ pathname: "/profiles", query: { category: "apartment" } }}
          >
            {categoriesIcons.apartment}
            آپارتمان
          </Link>
        </li>

        <li>
          <Link href={{ pathname: "/profiles", query: { category: "store" } }}>
            {categoriesIcons.store}
            مغازه
          </Link>
        </li>

        <li>
          <Link href={{ pathname: "/profiles", query: { category: "office" } }}>
            {categoriesIcons.office}
            دفتر
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
