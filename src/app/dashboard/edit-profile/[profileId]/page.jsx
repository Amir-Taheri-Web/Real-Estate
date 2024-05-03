import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Profile from "@/models/Profile";
import User from "@/models/User";
import AddProfilePage from "@/templates/AddProfilePage";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import toast from "react-hot-toast";

const EditProfile = async ({ params }) => {
  await connectDB();

  const session = await getServerSession(authOptions);

  if (!session) return toast.error("لطفا وارد حساب کاربری خود شوید");

  const user = await User.findOne({ email: session.user.email });

  if (!user) return toast.error("شما مجاز به دسترسی به این آگهی نیستید");

  const profile = await Profile.findOne({ _id: params.profileId });

  if (!profile.userId.equals(user._id))
    return toast.error("شما مجاز به دسترسی به این آگهی نیستید");

  return (
    <AddProfilePage edit={true} profileData={JSON.parse(JSON.stringify(profile))} />
  );
};

export default EditProfile;
