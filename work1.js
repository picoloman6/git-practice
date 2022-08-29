const say = (str) => {
  console.log(str);
};

const sum = (...numbers) => {
  return numbers.reduce((cur, next) => cur + next, 0);
};

const example = () => {
  console.log("연습용입니다.");
};
