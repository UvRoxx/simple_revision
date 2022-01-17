// JAVASCRIPT-Revision Notes By Utkarsh Varma >

// VAIABLE DECLARATION
// --------------------------------------------------

// In Js There are 3 different ways to define variables
// var, let , const
// var is function scoped unless we diirectly define it in the global scope
// let is block scoped
// const is block scoped and cannot be reassigned
{
    let a = 20;
    var b =30;
    const c = 40;
// c=50;  this will throw an error as const is block scoped and cannot be reassigned
}
// console.log(a); If we console log a here it will give an error as a is not defined
// console.log(b); this however will work as b is defined in the global scope
// c = 50; this will give an error as c is not defined
// let score; this is possible since the varibale is a let and not a const
// score = 50;
// console.log(score);
// const another_score; this is not possible since the variable is a const

// DATA TYPES
// --------------------------------------------------
//  Javascript has primitive data types and object data types
//  This means the data is directly assigned to memory and its not a resource
//  In JS we have String , Number , Boolean , Null , Undefined , Object , Symbol


const name = "John";
const age = 30;
const isCool = true;
const rating = 4.5;
const x= null;
const y = undefined; // this is a special value which is not assigned to any value
//  Null is a pointer that hold no value where as undefined means the value does not exist in the compiler
console.log(typeof name); // this will print the type of the variable
console.log(typeof age);
console.log(typeof isCool);
console.log(typeof rating);
console.log(typeof x); // This is print an object since in the first impementation of JS values were represented as a type tag and a value with the type tag for object being 0
// and null was represented as NULL pointer. As a result null had a type tag of 0. So the type of x is object
console.log(typeof y);

//  Lets look at Strings and concatenation
console.log("My name is " + name + " and I am " + age); // This is the old way of concatenation
// With ES6 we can use template literals
console.log(`My name is ${name} and I am ${age}`);
const s = "Hello World";
console.log(s.length); // This will print the length of the string 
console.log(s.toUpperCase()); // This will print the string in upper case
console.log(s.toLowerCase()); // This will print the string in lower case
console.log(s.substring(0,2));//This will print the sub string from 0 to 2
k = s.split(" "); // This will split the string into an array
console.log(k);
console.log(k.length); // This will print the length of the array


// ARRAYS
// --------------------------------------------------

const numbers = new Array(1,2,3,4,5); // This is the old way of creating an array
console.log(numbers);
console.log(typeof numbers);
//  Althoug we can also create an array using the array literal
const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);
fruits.push(10); //This will still work as Arrays in JS can accomodate any type of data together
const other_things = ['Something',true,10,"Cool"]
fruits.concat(other_things) // This will append the array other_things to fruits
console.log(fruits);
fruits.unshift("Strawberry"); // This will add the element to the beginning of the array
console.log(fruits);
fruits.pop(); // This will remove the last element of the array
fruits.shift(); // This will remove the first element of the array

// To check if a given element is an array we can use the Array.isArray() method this will return true or false
console.log(Array.isArray(fruits));
// To check if a given value exist inisde an array we can use the method indexOf() this will returnn the index of the element if it exists or -1 if it does not
console.log(fruits.indexOf("Banana")); // Banaaaaaaa


// OBJECTS LITERALS

const person = {
    firstName: "Utkarsh",
    lastName: "Varma",
    age: 22,
    hobbies: ["Coding", "More Coding", "High Frequency Trading"],
    address: {
        street: "Du Fort",
        city: "Montreal",
        state: "Quebec"
    }
}

// To access the value of an object we can use dot notation
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.hobbies);
console.log(person.address.city);


const todoJSON = JSON.stringify(person); // This will convert the object into a string
console.log(todoJSON);
console.log(typeof todoJSON);


// LOOPS

//  For Loops
for(let i=0;i<10;i++){
    console.log(`For Loop Number ${i}`);
}
// While Loops
let i=0;
while(i<10){
    console.log(`While Loop Number ${i}`);
    i++;
}
// Do While Loops
let j=0;
do{
    console.log(`Do While Loop Number ${j}`);
    j++;
}
while(j<10);

// For loop on arrays
for (i=0;i<fruits.length;i++){
    console.log(`This is a ${fruits[i]}`);
}

for (let fruit of fruits){
    console.log("This is a " + fruit);
}

//  Higher Order Array Methods
// forEach,map, filter,redue

// forEach
fruits.forEach(function(fruit){
console.log(fruit);
});// This method will run a function on each element of the array

// <Map>
let upper_case_fruits = fruits.map(function(fruit){
return fruit.toUpperCase();}); // This method will return a new array with the result of the function

// Filter
let filtered_fruits = fruits.filter(function(fruit){
    return fruit.length > 5;
}); // This method will return a new array with the result of the function


const todos = [
    {
        id: 1,
        text: "Take out trash",
        isCompleted: true
    },
    {
        id: 2,

        text: "Meeting with boss",
        isCompleted: true

    },
    {
        id: 3,

        text: "Dentist appt",
        isCompleted: false
    }
];



// Chaining Array Methods 
let new_todos = todos.filter(function(todo){
return todo.isCompleted === true; // This will return an array with all completed todos
}).map(function(todo){
    return todo.text.toUpperCase(); // This will then chain on to the result and return the text of the todos in upper case
})


// Reduce 
// Reduce helps us to reduce the array to a single value
let numbers_ = [1,2,3,4,5];
let result_of_reduce = numbers_.reduce(function(accumulator,currentValue){
    return accumulator + currentValue;
}) // This will return 15 adding all the numbers in the array


const some_variable = "10";
//  If we use == it will check if the values are equal and not comparte the type
if (some_variable==10){
    console.log("x is 10");
}

// However if we use === it will check if the values are equal and also the type
if (some_variable===10){
    console.log("x is 10");
}else{
    console.log("x is not 10");
}

const a = 10;
const v = 20;
// Conditional Operator

// This is the OR operator
if(a >5 || v< 10){
    console.log("This is true");
}
// This is the AND operator
if(a >5 && v< 10){
    console.log("This is true");
}

// Ternary Operator

//  This is the short hand version of the if else statement where 
let new_x = 11;
const color = new_x>10?'red':'blue';
console.log(color); // This will return red


// Switch Statement

switch(color){
    case 'red':
        console.log("Color is red");
        break;
    case 'blue':
        console.log("Color is blue");
        break;
    default:
        console.log("Color is not red or blue");       
}

// Functions

function addNumsAgain(num1=1,num2=1){
return num1+num2
}

console.log(addNumsAgain(5,4));

// Here there is also support for first class functions/varibales as functions
const addNums = (num1=1,num2=1)=>{
    return num1+num2;
} 
console.log(addNums(2,2)) 
// We can slim down the function further

const addNumSlim = num1 => num1 + 5;


// Object oriented 

// This is my initial implementation of the Person Constructor 

function Person(firstName,lastName,dob){

this.firstName = firstName;
this.lastName  = lastName;
this.dob = new Date(dob);
this.getFullName = function(){
    return `${firstName} ${lastName}`
}
// this.getBirthYear = function(){

//     return this.dob.getFullYear()
// }
// this.getCurrentAge = function(){
//     console.log(`Current Age is ${ Date.now()} and ${this.dob}`)
//     return Date.now().getFullYear - this.dob
// }
}
// But this object contains fucntions which we might not always weant to use so we can move them in prototype
Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}
// So Now only the properties of person will be the part of the main object and these methods will be moved to the prototype

// Instantiate object 
const person1 = new Person("U","V","1999-02-")
console.log(person1)

// There is a better way to achieve this using Class

// Class
// This return the same result but improves the syntax
class NewPerson{
    constructor(firstName,lastName,dob){
    this.firstName=firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    }

    getFullName= function(){
        return `${firstName} ${lastName}`
    }

}


// DOM
console.log(window);
//Selectors
console.log(document.getElementById('my-form'));
// Single element 
console.log(document.getElementById("h1"));
// Multiple element 
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName("item"))