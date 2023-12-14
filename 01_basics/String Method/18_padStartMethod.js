/***********************************String.prototype.padStart()*************************************/
/*
    The padStart() method of String values pads this string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of this string.


    Syntax:
    padStart(targetLength)
    padStart(targetLength, padString)


*/


const str1 = '5';

console.log(str1.padStart(2, '0'));
// Expected output: "05"

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber); // Expected output: "************5581"




"abc".padStart(10); // "       abc"
"abc".padStart(10, "foo"); // "foofoofabc"
"abc".padStart(6, "123465"); // "123abc"
"abc".padStart(8, "0"); // "00000abc"
"abc".padStart(1); // "abc"



// Fixed width string number conversion

// JavaScript version of: (unsigned)
// printf "%0*d" width num
function leftFillNum(num, targetLength) {
    return num.toString().padStart(targetLength, "0");
  }
  
  const num = 123;
  console.log(leftFillNum(num, 5)); // "00123"
  