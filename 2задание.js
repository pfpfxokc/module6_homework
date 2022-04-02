
function getNumber(num) {
  if (num < 1000) {
    for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  } else {
    console.log('нужно меньше 1000')
  }
};

console.log(getNumber(5));
console.log(getNumber(10000));

// только вопрос: когда я ввожу больше 1000, то
// в консоль выводится 'нужно меньше 1000', но потом следующая строка - это
//undefined. что делать с этим? как убрать? 