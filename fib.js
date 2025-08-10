const fib = (n) => {
  if (typeof n !== "number" || n < 0) {
    return null;
  }
  if (n === 0 || n === 1) {
    return n;
  }
  let first = 0;
  let second = 1;
  for (let i = 2; i <= n; i++) {
    let temp = second;
    second = first + second;
    first = temp;
    // BONUS!!!
    if (second > Number.MAX_SAFE_INTEGER) {
      return null;
    }
  }
  return second;
};

module.exports = fib;
