import DropDown from "@/modules/DropDown";
import ProfileCard from "@/modules/ProfileCard";
import styles from "@/styles/ProfilesPage.module.css";

const ProfilesPage = ({ profiles, category }) => {
  return (
    <div className={styles.container}>
      <DropDown category={category} />

      <ul>
        {profiles.map((profile) => (
          <li key={profile._id}>{<ProfileCard profile={profile} />}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilesPage;
