"use client";

import DashboardCard from "@/modules/DashboardCard";
import Loader from "@/modules/Loader";
import styles from "@/styles/MyProfilesPage.module.css";
import toast from "react-hot-toast";
import useSWR from "swr";

const MyProfilesPage = () => {
  const fetchProfiles = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  const { data, error, isLoading } = useSWR(
    "/api/profiles/my-profiles",
    fetchProfiles
  );

  if (error) toast.error("مشکلی پیش آمده. دوباره امتحان کنید");
  if (data?.status === "failure") toast.error(data.message);
  if (isLoading) return <Loader />;

  return (
    <div className={styles.container}>
      {data?.user.profiles.length ? (
        data?.user.profiles.map((profile) => (
          <DashboardCard key={profile._id} profile={profile} />
        ))
      ) : (
        <p>آگهی برای نمایش وجود ندارد</p>
      )}
    </div>
  );
};

export default MyProfilesPage;
