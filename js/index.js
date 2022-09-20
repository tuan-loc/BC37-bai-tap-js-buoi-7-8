var arrNumber = [];

function addNumber() {
  var number = +document.getElementById("number").value;
  arrNumber.push(number);

  renderNumber();

  document.getElementById("number").value = "";
}

function renderNumber() {
  var result = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    result = result + arrNumber[i] + ", ";
  }

  document.getElementById("array").innerHTML = result;
}

function calcSum() {
  var sum = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    sum += arrNumber[i];
  }

  document.getElementById("calcSum").innerHTML = sum;
}

function countNumber() {
  var count = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      count++;
    }
  }

  document.getElementById("countNumber").innerHTML =
    "Có " + count + " số dương trong mảng";
}

function findMin() {
  var min = arrNumber[0];
  for (var i = 0; i < arrNumber.length; i++) {
    if (min > arrNumber[i]) {
      min = arrNumber[i];
    }
  }

  document.getElementById("findMin").innerHTML = min;
}

function findMinPositiveNumber() {
  var min = -1;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      min = arrNumber[i];
      break;
    }
  }

  if (min === -1) {
    document.getElementById("findMinPositiveNumber").innerHTML =
      "Mảng không có số dương";
    return;
  }

  for (var j = 0; j < arrNumber.length; j++) {
    if (arrNumber[j] < min && arrNumber[j] > 0) {
      min = arrNumber[j];
    }
  }

  document.getElementById("findMinPositiveNumber").innerHTML = min;
}

function findEvenNumber() {
  var evenNumber = -1;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] % 2 === 0) {
      evenNumber = arrNumber[i];
    }
  }

  if (evenNumber === -1) {
    document.getElementById("findEvenNumber").innerHTML =
      "Mảng không có giá trị chẵn";
  } else {
    document.getElementById("findEvenNumber").innerHTML = evenNumber;
  }
}

function changePosition() {
  var position1 = +document.getElementById("position1").value;
  var position2 = +document.getElementById("position2").value;
  var temp = arrNumber[position1];
  arrNumber[position1] = arrNumber[position2];
  arrNumber[position2] = temp;

  var result = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    result = result + arrNumber[i] + ", ";
  }

  document.getElementById("changePosition").innerHTML = result;
}

function sortNumber() {
  for (var i = 0; i < arrNumber.length; i++) {
    for (var j = 0; j < arrNumber.length - i; j++) {
      var temp = 0;
      if (arrNumber[j] > arrNumber[j + 1]) {
        temp = arrNumber[j];
        arrNumber[j] = arrNumber[j + 1];
        arrNumber[j + 1] = temp;
      }
    }
  }

  var result = 0;
  for (var k = 0; k < arrNumber.length; k++) {
    result = result + arrNumber[k] + ", ";
  }

  document.getElementById("sortNumber").innerHTML = result;
}

function checkNumber(number) {
  if (number < 2) {
    return false;
  }

  if (number === 2) {
    return true;
  }

  for (var i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function findPrime() {
  var isPrime = false;
  var firstPrime = -1;

  for (var i = 0; i < arrNumber.length; i++) {
    isPrime = checkNumber(arrNumber[i]);
    if (isPrime) {
      firstPrime = arrNumber[i];
      break;
    }
  }

  if (firstPrime === -1) {
    document.getElementById("findPrime").innerHTML =
      "Mảng không có số nguyên tố";
  } else {
    document.getElementById("findPrime").innerHTML = firstPrime;
  }
}

var arrRealNumber = [];
function addRealNumber() {
  var realNumber = +document.getElementById("realNumber").value;
  arrRealNumber.push(realNumber);

  renderRealNumber();

  document.getElementById("realNumber").value = "";
}

function renderRealNumber() {
  var result = 0;
  for (var i = 0; i < arrRealNumber.length; i++) {
    result = result + arrRealNumber[i] + ", ";
  }

  document.getElementById("arrayRealNumber").innerHTML = result;
}

function findInteger() {
  var count = 0;
  for (var i = 0; i < arrRealNumber.length; i++) {
    if (arrRealNumber[i] % 1 === 0) {
      count++;
    }
  }

  document.getElementById("findInteger").innerHTML = count + " số nguyên";
}

function comparision() {
  var countPositiveNumber = 0;
  var countNegativeNumber = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      countPositiveNumber++;
    } else if (arrNumber[i] < 0) {
      countNegativeNumber++;
    }
  }

  var message = "";
  if (countPositiveNumber > countNegativeNumber) {
    message = "Số dương nhiều hơn số âm";
  } else if (countNegativeNumber > countPositiveNumber) {
    message = "Số âm nhiều hơn số dương";
  } else {
    message = "Số âm bằng với số dương";
  }

  document.getElementById("comparision").innerHTML = message;
}
