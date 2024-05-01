import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import SignOut from "./SignOut";

const DashboardSideBar = ({ email, firstName, lastName }) => {
  return (
    <aside>
      <div>
        <span>
          <FaUserCircle />
        </span>

        <h5>{`${firstName} ${lastName}`}</h5>
        <p>{email}</p>
      </div>

      <ul>
        <li>
          <Link href="/dashboard">داشبورد</Link>
        </li>

        <li>
          <Link href="/dashboard/my-profiles">آگهی های من</Link>
        </li>

        <li>
          <Link href="/dashboard/add-profile">ثبت آگهی</Link>
        </li>
      </ul>

      <SignOut />
    </aside>
  );
};

export default DashboardSideBar;
