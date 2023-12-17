function solve(arr, rotations) {
  if (rotations == 0) return arr;
  for (let i = 0; i < rotations; i++) {
    let element = arr.pop();
    console.log(`pop : ${element}`);
    arr.unshift(element);
    console.log(`unshift : ${arr}`);
  }
  return arr;
}
solve([44, 1, 22, 111], 5);


// ‘debugger’ statement is used to setup the breakup points at probable points of error in the code snippet, using the debugger window.
// NaN in Javascript is defined to be of type number despite its name(not a number).
// Object Serialization is the process in which an object or data structure is translated into a format suitable for transferral over a network, or storage.



// 4. Which function is used to serialize an object into a JSON string in Javascript?

//   The JSON.stringify() function is used to convert a JSON object into string format.


console.log(parseInt("123Hello")); // 123
console.log(parseInt("Hello123")); // NaN

var a = "hello";
var sum = 0;
for(var i = 0; i < a.length; i++) {
  sum += (a[i] - 'a');
}
console.log(sum); // NaN


// In Javascript, objects are passed by reference and hence the strict equality operator compares their references.

// let left = 0;
// let right = 5;
let left = 3;
let right = 5;
console.log(Math.floor((left + right)/2));
console.log(Math.floor(24.5));

console.log();

let s = "00000001111111";
let l = 0, r = s.length - 1, ans = -1;
console.log(r);
while(l <= r) 
{
  let mid = Math.floor((l + r) / 2);
  if(s[mid] == '1') {
      ans = mid;
      r = mid - 1;
    }
  else {
      l = mid + 1;
    }
}
  console.log(ans);