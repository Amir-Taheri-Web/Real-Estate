import ProfilesPage from "@/templates/ProfilesPage";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";

const Profiles = async ({ searchParams }) => {
  await connectDB();

  const profiles = await Profile.find().select("-userId");

  const filteredProfiles = searchParams.category
    ? profiles.filter((profile) => profile.category === searchParams.category)
    : profiles;

  return <ProfilesPage profiles={filteredProfiles} />;
};

export default Profiles;
