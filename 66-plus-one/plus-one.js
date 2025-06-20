/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
     joinDigits=digits.join('')
  joinDigits=BigInt(joinDigits)+BigInt(1)
  digits=joinDigits.toString().split('').map(Number)
  return digits
};