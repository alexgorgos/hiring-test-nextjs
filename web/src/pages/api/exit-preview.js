const exit = (req, res) => {
  res.clearPreviewData();
  res.writeHead(307, { Location: `/` });
};

export default exit;
