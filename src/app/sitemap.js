import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";

const sitemap = async () => {
  const staticRoutes = ["", "/profiles"];

  await connectDB();
  const res = await Profile.find().select("-userId");
  const profiles = await res.json();

  const routes1 = staticRoutes.map((route) => ({
    url: `${process.env.URL}/${route}`,
    lastModified: new Date().toString(),
  }));

  const routes2 = profiles.map((profile) => ({
    url: `${process.env.URL}/profiles/${profile._id}`,
    lastModified: new Date().toString(),
  }));

  return [...routes1, ...routes2];
};

export default sitemap;
