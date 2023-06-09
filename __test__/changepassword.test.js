const { signUp, signIn, changePassword, deleteUser } = require("../utils");

it("should change password of a user successfully", () => {
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
  const oldPassword = "456789123";
  const password = "123456789";

  changePassword(users, username, oldPassword, password);

  expect(users.length).toBe(2);
  expect(users).toStrictEqual([
    {
      username: "pouya2781",
      password: "12345678",
    },
    {
      username: "arian1234",
      password: "123456789",
    },
  ]);
});

it("should not change password of a user", () => {
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
      const oldPassword = "1234";
      const password = "123456789";
    
      changePassword(users, username, oldPassword, password);
    
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
