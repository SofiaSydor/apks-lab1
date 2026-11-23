const { add } = require("../src/math");

describe("BasicAddition", () => {
  test("adds positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds zero", () => {
    expect(add(7, 0)).toBe(7);
  });

  test("adds negative numbers", () => {
    expect(add(-4, -6)).toBe(-10);
  });
});
