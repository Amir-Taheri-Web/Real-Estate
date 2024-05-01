import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import SignOut from "./SignOut";
import styles from "@/styles/DashboardSideBar.module.css";
import { MdSpaceDashboard } from "react-icons/md";
import { BsHousesFill } from "react-icons/bs";
import { BsFillHouseAddFill } from "react-icons/bs";

const DashboardSideBar = ({ email, firstName, lastName }) => {
  return (
    <aside className={styles.container}>
      <div className={styles.header}>
        <span>
          <FaUserCircle />
        </span>

        <h5>{`${firstName} ${lastName}`}</h5>
        <p>{email}</p>
      </div>

      <ul className={styles.links}>
        <li>
          <Link href="/dashboard">
            <MdSpaceDashboard />
            داشبورد
          </Link>
        </li>

        <li>
          <Link href="/dashboard/my-profiles">
            <BsHousesFill />
            آگهی های من
          </Link>
        </li>

        <li>
          <Link href="/dashboard/add-profile">
            <BsFillHouseAddFill />
            ثبت آگهی
          </Link>
        </li>
      </ul>

      <SignOut />
    </aside>
  );
};

export default DashboardSideBar;
