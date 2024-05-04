"use client";

import Link from "next/link";

const DropDown = () => {
  return (
    <div>
      <button type="button">دسته بندی</button>

      <ul>
        <li>
          <Link href="/profiles">همه</Link>
        </li>

        <li>
          <Link href={{ pathname: "/profiles", query: { category: "villa" } }}>
            ویلا
          </Link>
        </li>

        <li>
          <Link
            href={{ pathname: "/profiles", query: { category: "apartment" } }}
          >
            آپارتمان
          </Link>
        </li>

        <li>
          <Link href={{ pathname: "/profiles", query: { category: "store" } }}>
            مغازه
          </Link>
        </li>

        <li>
          <Link href={{ pathname: "/profiles", query: { category: "office" } }}>
            دفتر
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
