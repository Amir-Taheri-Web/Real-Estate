import ProfileCard from "./ProfileCard";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const DashboardCard = ({ profile }) => {
  return (
    <div>
      <ProfileCard profile={profile} />
      <div>
        <button type="button">
          <FaEdit />
        </button>

        <button type="button">
          <MdDeleteForever />
        </button>
      </div>
    </div>
  );
};

export default DashboardCard;
