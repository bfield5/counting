var numberInput = window.prompt("Please enter 6 numbers!");

function counting(input) {
  var numOutput = "";
  var countingArray = [];

  var removPars = input.replace(/\D/g, "");
  var splitNumbers = removPars.split("");
  var numArray = splitNumbers.map(Number);
  var i;

  for (i = 0; i < numArray.length; i += 1) {

    if (numArray[i] < numArray[i-1]) {
      numOutput = "down";
      countingArray.push(numOutput);
    }
    if (numArray[i] > numArray[i-1]) {
      numOutput = "up";
      countingArray.push(numOutput);
    }
    if (numArray[i] === numArray[i-1]) {
      numOutput = "equal";
      countingArray.push(numOutput);
    }
  }
  return countingArray;
}
console.log(counting(numberInput));
