const { signUp, signIn, changePassword, deleteUser } = require("../utils");

it("should register a new user successfully", () => {
  const users = [
    {
      username: "pouya2781",
      password: "12345678",
    },
  ];
  const username = "arian1234";
  const password = "456789123";

  signUp(users, username, password);

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

it("should not register a new user", () => {
    const users = [
      {
        username: "pouya2781",
        password: "12345678",
      },
    ];
    const username = "pouya2781";
    const password = "456789123";
  
    signUp(users, username, password);
  
    expect(users.length).toBe(1);
    expect(users).toStrictEqual([
      {
        username: "pouya2781",
        password: "12345678",
      }
    ]);
  });
