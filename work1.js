const say = (str) => {
  console.log(str);
};

const sum = (...numbers) => {
  return numbers.reduce((cur, next) => cur + next, 0);
};
