const users = [
  { id: 1, firstName: "John", lastName: "LOl" },
  { id: 2, firstName: "orgil", lastName: "lolz" },
];
exports.getUsers = (request, response) => {
  response.status(200).json({
    users: users,
  });
};
exports.createUser = (request, response) => {
  users.push({ id: users.length + 1, ...request.body });
  console.log(users);
  response.status(200).json({ message: "New user created" });
};
