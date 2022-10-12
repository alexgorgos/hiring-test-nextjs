const preview = (req, res) => {
  if (!req.query.secret) {
    return res.status(401).json({ message: "No secret token" });
  }

  if (req.query.secret !== process.env.SANITY_PREVIEW_SECRET) {
    return res.status(401).json({ message: "Invalid secret token" });
  }

  if (!req.query._id) {
    return res.status(401).json({ message: "No slug" });
  }

  res.setPreviewData({});

  res.writeHead(307, { Location: `/` });

  return res.end();
};

export default preview;
