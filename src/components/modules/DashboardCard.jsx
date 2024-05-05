import ProfileCard from "./ProfileCard";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import styles from "@/styles/DashboardCard.module.css";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const DashboardCard = ({ profile }) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const deleteHandler = async () => {
    setIsLoading(true);

    try {
      const res = await fetch(`/api/profile/delete/${profile._id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      setIsLoading(false);

      if (data.status === "success") {
        toast.success(data.message);
        router.refresh();
      }

      if (data.status === "failure") toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <ProfileCard profile={profile} />
      <div className={styles.buttons}>
        <button type="button">
          <Link href={`/dashboard/edit-profile/${profile._id}`}>
            <FaEdit />
          </Link>
        </button>

        <button type="button" onClick={deleteHandler} disabled={isLoading}>
          <MdDeleteForever />
        </button>
      </div>

      <div className={styles.status}>
        <p>{profile.published ? "منتشر شده" : "در صف انتشار..."}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
