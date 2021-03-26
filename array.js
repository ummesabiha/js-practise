let myList = ["lily", "rose", "sunflower", "cosmos"];
myList[myList.length] = "orchid";
myList.push("tulip");  //add last
myList.unshift("Carnation"); //add first
myList.pop(); //remove last element
let lastElement = myList.pop(); //return back last removed  element

console.log(myList);
console.log(lastElement);