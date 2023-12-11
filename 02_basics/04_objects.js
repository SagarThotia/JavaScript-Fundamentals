// const tinderUser = new Object(); // sigleton Object
const tinderUser = {}; // non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Sagar",
            lastname: "Thotia"
        }
    }
}
console.log(regularUser.fullname?.userfullname.firstname.toUpperCase());
console.log(regularUser.fullname?.userfullname.lastname.toUpperCase());


/*
    Optional Chain
    ? : If name is doesn't exists it will protect from error throw
    you use '?' when response is coming API If you not use Optional then will be use if else everywhere it is not good practice because of if-else length of code will be increase and reduce readability 
*/

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// const obj3 = {obj1, obj2};
const obj3 = {...obj1, ...obj2}; // mostly use spread operator
// const obj3 = Object.assign({}, obj1, obj2, obj4);
// const obj3 = Object.assign(obj1, obj2);
console.log(obj3);

// Value come from database 

const users =  [
    {
        id:1,
        email: "s@gmail.com",
    }
]

// users[1].email;

// mostly use this props

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // rarely used properties
console.log(tinderUser.hasOwnProperty('isLoggedIn'));



/***************************************Objects Destructuring******************************************/

const course ={
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "sagar" 
}

// course.courseInstructor

const {courseInstructor} = course;
const {courseInstructor: instructor} = course;

console.log(courseInstructor);
console.log(instructor);


// Reacts Portion understanding

// Destructor part in reacts

const navbar = ({company}) =>{

}

navbar(company ="sagar");

// JSON API

{
    "name": "sagar",
    "coursename": "Solidity",
    "price": "free"
}


[
  {},
  {},
  {}
]

