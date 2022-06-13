const add = function(n1, n2) {
  return n1 + n2
};

const subtract = function(n1, n2) {
  return n1 - n2
};

const sum = function() {
  let numbers = arguments[0].slice()
  let acumulador = 1
  for(let i = 0; i < numbers.length; i++){
    acumulador += numbers[i]
  }
  return acumulador -1
};
/*SOLUCION PRO
const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};
*/
const multiply = function() {
  let numbers = arguments[0].slice()
  let acumulador = 1
  for(let i = 0; i < numbers.length; i++){
    acumulador *= numbers[i]
  }
  return acumulador
};
/*SOLUCION PRO
const multiply = function(array) {
    return array.length
      ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
      : 0;
};

*/
const power = function(n1, n2) {
	return Math.pow(n1, n2)
};

const factorial = function(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
