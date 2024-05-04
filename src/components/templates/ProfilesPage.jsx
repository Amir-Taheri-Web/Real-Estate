import DropDown from "@/modules/DropDown";
import ProfileCard from "@/modules/ProfileCard";

const ProfilesPage = ({ profiles }) => {
  return (
    <div>
      <DropDown />

      <ul>
        {profiles.map((profile) => (
          <li key={profile._id}>{<ProfileCard profile={profile} />}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilesPage;
