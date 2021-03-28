let myList = ["lily", "rose", "sunflower", "cosmos"];
myList[myList.length] = "orchid";
myList.push("tulip");  //add last
myList.unshift("Carnation"); //add first
myList.pop(); //remove last element
let lastElement = myList.pop(); //return back last removed  element

console.log(myList);
console.log(lastElement);

let fruits = ["apple", "orange", "banana"];
let flowers = ["lily", "freesia", "peruvian lily"];

// let lastFruits = fruits.pop();
// flowers.push(lastFruits)

// let fruitsToRemove = fruits[1];
// flowers.push(fruitsToRemove);

// delete(fruits[1]);
fruits.splice(1,0);


console.log(fruits, flowers);
console.log(fruits.length, flowers.length);