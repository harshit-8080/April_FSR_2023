const userController = require("../advance/user.controller");
const userService = require("../advance/user.service");

describe("User Module Tests", () => {
  it("should return user info for valid userId", async () => {
    jest
      .spyOn(userService, "getUserData")
      .mockResolvedValue({ id: 101, name: "John" });

    const result = await userController.getUserInfo(101);

    expect(result).toEqual({ id: 101, name: "John" });
  });
});
