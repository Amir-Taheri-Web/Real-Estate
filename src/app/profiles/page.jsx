import ProfilesPage from "@/templates/ProfilesPage";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";

export const metadata = {
  title: "املاک | آگهی ها",
  description: "(ویلا، مغازه، آپارتمان، دفتر)آگهی های خرید و فروش املاک",
};

const Profiles = async ({ searchParams }) => {
  await connectDB();

  const profiles = await Profile.find({ published: true }).select("-userId");

  const filteredProfiles = searchParams.category
    ? profiles.filter((profile) => profile.category === searchParams.category)
    : profiles;

  return <ProfilesPage profiles={filteredProfiles} />;
};

export default Profiles;
