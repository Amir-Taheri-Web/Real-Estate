import ProfileCard from "@/modules/ProfileCard";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const AdminCard = ({ profile }) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const publishHandler = async (id) => {
    setIsLoading(true);

    try {
      const res = await fetch(`/api/profile/publish/${id}`, {
        method: "PATCH",
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

  const deleteHandler = async (id) => {
    setIsLoading(true);

    try {
      const res = await fetch(`/api/profile/delete/${id}`, {
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
    <div>
      <div>
        <ProfileCard profile={profile} />
        <button
          type="button"
          disabled={isLoading}
          onClick={() => publishHandler(profile._id)}
        >
          انتشار
        </button>
        <button
          type="button"
          disabled={isLoading}
          onClick={() => deleteHandler(profile._id)}
        >
          حذف
        </button>
      </div>
    </div>
  );
};

export default AdminCard;
