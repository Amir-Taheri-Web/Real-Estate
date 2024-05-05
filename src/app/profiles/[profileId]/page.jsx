import Profile from "@/models/Profile";
import ProfileDetailsPage from "@/templates/ProfileDetailsPage";
import connectDB from "@/utils/connectDB";

const ProfileDetails = async ({ params }) => {
  await connectDB();

  const profile = await Profile.findOne({ _id: params.profileId }).select(
    "-userId"
  );

  return <ProfileDetailsPage profile={profile} />;
};

export default ProfileDetails;

export const generateMetadata = async ({ params: { profileId } }) => {
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });

  return {
    title: profile.title,
    description: profile.description,
  };
};
