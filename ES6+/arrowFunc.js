// write const getNum = () => 2; as a es5 function declaration

function getNum(){
    return 2
}
console.log(getNum());

// write const isOne = num => num == 1; in old way of writing function

function isOne(num){
    return num == 1;
}

console.log(isOne(1));

// convert the following arrow func to function declaration
// const isBigger = (a,b) => a > b;
// console.log("Is 2 bigger than 3?", isBigger(2,3))

function isBigger(a, b){
   return a > b;
}

console.log("Is 2 bigger than 3?", isBigger(2,3))

//next conversion

// const printProduct = (a, b) => {
// 	console.log("product of...");
// 	return a*b;
// }
// console.log(printSomethingAndReturn(2))

function printProduct(a, b){
    console.log("product of ...")
    return a*b
}

console.log(printProduct(3, 5));

function printSomethingAndReturn(num){
    console.log("multiply by 100");
    return num*100
}

console.log(printSomethingAndReturn(2));

// convert the arrow to function declaration
// const giveMeAnObject = a => ({ value: a })

// console.log(giveMeAnObject(5))

function giveMeAnObject(a){
   return {value: a}
}

console.log(giveMeAnObject(7))

// write in least amount of characters

// function Add22andReturn(num) {
//     let sum = 0;
//     sum = num + 22;
//     return sum;
// }

const add22andReturn = num => num + 22;

console.log(add22andReturn(4));

//figure the output 
// const defaultExample = (a,b) => a + b;
// console.log(defaultExample(2))

// the output will be NaN

// fix for the above 

const defaultExample = (a, b=0) => a + b;
console.log(defaultExample(2))

// doing this in function declaration 

function oldWay(a, b){
if(b == undefined){
b = 0
}

return a + b
}

console.log(oldWay(2));






