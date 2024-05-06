const sitemap = async () => {
  const staticRoutes = ["", "/profiles"];

  const routes1 = staticRoutes.map((route) => ({
    url: `${process.env.URL}/${route}`,
    lastModified: new Date().toString(),
  }));

  return [...routes1];
};

export default sitemap;
