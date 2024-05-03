import ProfileCard from "./ProfileCard";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import styles from "@/styles/DashboardCard.module.css";
import Link from "next/link";

const DashboardCard = ({ profile }) => {
  return (
    <div className={styles.container}>
      <ProfileCard profile={profile} />
      <div className={styles.buttons}>
        <button type="button">
          <Link href={`/dashboard/edit-profile/${profile._id}`}>
            <FaEdit />
          </Link>
        </button>

        <button type="button">
          <MdDeleteForever />
        </button>
      </div>
    </div>
  );
};

export default DashboardCard;
