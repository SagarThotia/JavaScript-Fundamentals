const inputDatas = 'James Smith';

// Split the full name into an array of words
const nameParts = inputDatas.split(' ');

// Extract the first letter of each word and join them with dots
const initials = nameParts.map(part => part.charAt(0)).join('.');

// Result
const expectedResults = initials; // 'J.S'

console.log(expectedResults);

const inputData = 'James Smith';

const expectedResult = inputData
  .split(' ')
  .map(word => word.charAt(0))
  .join('.');

console.log(expectedResult); // 'J.S'

