let a = 7;
if (a < 10) {
    console.log(a)
    console.log("This number", a , "is less than", 10);
} else { 
    console.log("This number", a , "is greater than", 10);
}

let x = 8;
if (x < 10) {
    console.log(x)
    console.log("This number", x , "is greater than", 10);
} else if (x < 20) {
    console.log("This number", x , "is less than", 20);
} else { 
    console.log("This number", x , "is less than", 10);
}
 
var y = 20;
var z = 21;
if (y>z) {
    console.log("y is smaller than z");
} else {
    console.log("y is greater than z");
}

let r = 8;
if (8 == r) {
    console.log("n is not equal to 8");
} else {
    console.log("n is equal to 8");
}
//nesting (add one more if)

let planetOne = "mars";
let planetTwo = "pluto";
let thoseArePlanet = true;

if ("mars"==planetOne) {
    if("pluto"==planetTwo) {
            console.log("Mars and Pluto are planets");
        } else {
            console.log("Those are not planets");
        }
    }

    

