exports.fetchUserData = () => {
  // This would normally call an API
  return { name: "John Doe", age: 30 };
};

exports.getUserData = () => {
  let userApiResult = exports.fetchUserData();
  return `User is ${userApiResult.name}, age ${userApiResult.age}`;
};
