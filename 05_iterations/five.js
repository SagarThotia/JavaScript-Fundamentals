// forEach

const coding = ["js", "ruby", "java", "py", "cpp"];

coding.forEach( function (items){
    console.log(items);
})

console.log();

coding.forEach( (items) =>{
    console.log(items);
})

console.log();
console.log();

function printMe(item){
    console.log(item);
}

coding.forEach(printMe);


console.log();
console.log();

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})


console.log();
console.log();

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    }
]

// data comes from database in the form of array.
myCoding.forEach((item) => {
    console.log(item.languageName);
    console.log(item.languageFileName);
    console.log();
})