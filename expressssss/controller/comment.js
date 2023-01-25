exports.GetComments = async (req, res) => {
  const comments = await Comments.find();
  response(comments);
};
