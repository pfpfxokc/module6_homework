function getSum(one) {
  return function (two) {
    return one + two;
  }
}

let sum = getSum(56);

console.log(sum(89));