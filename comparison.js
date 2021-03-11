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
let theseArePlanet = true;

if ("mars"==planetOne) {
    if("pluto"==planetTwo) {
        if (theseArePlanet) {
            console.log("Mars and Pluto are planets");
        } else {
            console.log("Those are not planets");
        }
    }
}

//or

let planetThree = "mercury";
let planetFour = "venus";
let thoseArePlanets = true;

if ("mercury"==planetThree && "venus"==planetFour && thoseArePlanets) {
    console.log("Mars and Venus are planets");
} else {
    console.log("Those are not planets");
}
    
// or ||
var c = 8;
if (c < 10 ) {
    if ( 2 == c || 3 == c || 5 == c || 7 == c) {
        console.log("This number", c, "is smaller than 10 and its a prime number");
    } else {
        console.log("This number", c, "is smaller than 10 and its a prime number");
    }
} else {
    console.log("This number", c, "is greater than 10");
}

var d = 7;
if (d < 11 ) {
    if ( 2 == d || 3 == d || 5 == d || 7 == d) {
        console.log("This number", d, "is greater than 10 and its not a prime number");
    } else {
        console.log("This number", d, "is smaller than 11 and its a prime number");
    }
} else {
    console.log("This number", d, "is greater than 11");
}

