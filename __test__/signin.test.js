const { signUp, signIn, changePassword, deleteUser } = require("../utils");

it("should sign in a user successfully", () => {
  const users = [
    {
      username: "pouya2781",
      password: "12345678",
    },
    {
      username: "arian1234",
      password: "456789123",
    }
  ];
  const username1 = "arian1234";
  const password1 = "456789123";
  const username2 = "pouya2781";
  const password2 = "12345678";

  expect(signIn(users, username1, password1)).toBe(true);
  expect(signIn(users, username2, password2)).toBe(true);
});

it("should not sign in a user", () => {
    const users = [
      {
        username: "pouya2781",
        password: "12345678",
      },
      {
        username: "arian1234",
        password: "456789123",
      }
    ];
    const username1 = "arian1234";
    const password1 = "456789";
    const username2 = "pouya2788";
    const password2 = "12345678";
  
    expect(signIn(users, username1, password1)).toBe(false);
    expect(signIn(users, username2, password2)).toBe(false);
  });
