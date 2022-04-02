let arr = [1, 56, 8, 0, NaN, 'qwerty', 456, 265752, 757];
let arrEven = 0,
  arrOdd = 0,
  arrZero = 0;

function getNumber() {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
      if (arr[i] === 0) {
        arrZero += 1;
      } else if (arr[i] % 2 === 0) {
        arrEven += 1;
      } else {
        arrOdd += 1;
      }
    }
  }
  console.log(arrZero);
  console.log(arrEven);
  console.log(arrOdd);
}

getNumber();