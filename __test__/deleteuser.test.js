const { signUp, signIn, changePassword, deleteUser } = require("../utils");

it("should delete a user successfully", () => {
  const users = [
    {
      username: "pouya2781",
      password: "12345678",
    },
    {
      username: "arian1234",
      password: "456789123",
    },
  ];
  const username = "arian1234";

  deleteUser(users, username);

  expect(users.length).toBe(1);
  expect(users).toStrictEqual([
    {
      username: "pouya2781",
      password: "12345678",
    },
  ]);
});

it("should not delete a user", () => {
  const users = [
    {
      username: "pouya2781",
      password: "12345678",
    },
    {
      username: "arian1234",
      password: "456789123",
    },
  ];
  const username = "arian";

  deleteUser(users, username);

  expect(users.length).toBe(2);
  expect(users).toStrictEqual([
    {
      username: "pouya2781",
      password: "12345678",
    },
    {
      username: "arian1234",
      password: "456789123",
    },
  ]);
});
