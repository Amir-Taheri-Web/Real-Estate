"use client";

import AdminCard from "@/modules/AdminCard";
import Loader from "@/modules/Loader";
import toast from "react-hot-toast";
import useSWR from "swr";
import styles from "@/styles/AdminPage.module.css";

const AdminPage = () => {
  const fetchProfiles = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  const { data, error, isLoading, mutate } = useSWR(
    "/api/profiles/unpublished",
    fetchProfiles
  );

  if (error) toast.error("مشکلی پیش آمده. دوباره امتحان کنید");
  if (isLoading) return <Loader />;

  return (
    <div className={styles.container}>
      <h2>آگهی های منتشر نشده</h2>

      {!!data?.profiles.length ? (
        <div className={styles.cards}>
          {data?.profiles.map((profile) => (
            <AdminCard key={profile._id} profile={profile} mutate={mutate} />
          ))}
        </div>
      ) : (
        <p className={styles.noProfiles}>آگهی برای انتشار وجود ندارد</p>
      )}
    </div>
  );
};

export default AdminPage;
