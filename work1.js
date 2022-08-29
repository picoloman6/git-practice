const say = (str) => {
  console.log(str);
};

const add = (...numbers) => {
  return numbers.reduce((cur, next) => cur + next, 0);
};
