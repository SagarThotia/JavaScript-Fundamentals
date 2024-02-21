// DYNAMIC OBJECT PROPERTIES

const variable = "username";

const age =  10;

const prop1 = "ageIsLessThan17";

const prop2 = "ageIsMoreThan17";

const obj = {
    [variable]: 'Solidity',
    [age > 7 ? prop2 : prop1] : true,
}

console.log(obj);