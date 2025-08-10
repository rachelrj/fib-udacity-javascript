const fibRecursive = (n) => {
  if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    return fibRecursive(n - 2) + fibRecursive(n - 1);
  }
};
module.exports = fibRecursive;
