const userDataMock = require("./userDataMock");

describe("getUserData function", () => {
  let spyOnMethod;

  // Consider using beforeEach and afterEach if more than one test

  // beforeEach(() => {
  //   spyOnMethod = jest
  //     .spyOn(userDataMock, "fetchUserData")
  //     .mockReturnValue({ name: "Jane Doe", age: 25 });
  // });

  // afterEach(() => {
  //   spyOnMethod.mockRestore();
  // });

  spyOnMethod = jest
    .spyOn(userDataMock, "fetchUserData")
    .mockReturnValue({ name: "Jane Doe", age: 25 });
  test("should return mocked user information", () => {
    let result = userDataMock.getUserData();
    expect(result).toBe("User is Jane Doe, age 25");
  });
});
