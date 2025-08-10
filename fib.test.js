const fib = require("./fib");

test("0 returns 0", () => {
  expect(fib(0)).toBe(0);
});

test("1 returns 1", () => {
  expect(fib(1)).toBe(1);
});

test("2 returns 1", () => {
  expect(fib(2)).toBe(1);
});

test("3 returns 2", () => {
  expect(fib(3)).toBe(2);
});

test("4 returns 3", () => {
  expect(fib(4)).toBe(3);
});

test("5 returns 5", () => {
  expect(fib(5)).toBe(5);
});

test("9 returns 34", () => {
  expect(fib(9)).toBe(34);
});

test("-1 returns null", () => {
  expect(fib(-1)).toBe(null);
});

test("string returns null", () => {
  expect(fib("string")).toBe(null);
});

// BONUS!!!
test("number above MAX_SAFE_INTEGER returns null", () => {
  const result = fib(1000);
  expect(result).toBe(null);
});
