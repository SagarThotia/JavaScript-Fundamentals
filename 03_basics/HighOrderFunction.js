/*

*/

// HighOrderfunction
function salary(num){
    return num * 7;
}
setTimeout(salary,1000);

console.log(salary(1000))


const mySalaries = [50, 40, 60, 20, 300, 400];

// const result = mySalaries.filter(n => n > 50)
// const result = mySalaries.filter(tax).map()

console.log(result);


// ()=>{
//     (func) => {}
//     (func) => () => {}
//     (func) => async( )
// }

const asyncHandler = (fn) => async(req, res, next) => {
    try{
        await fn(req, res, next)
    }catch(error){
        console.error();
    }
}