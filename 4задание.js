function getNumber(one, two) {

  let timeId = setInterval(function () {
    console.log(one);
    if (one === two) {
      clearInterval(timeId);
    } else one++
  }, 1000)
}


getNumber(5, 15)