function planetList (name) {
    if (name) {
        console.log("Planet Name" + name);
    } else {
        console.log("Suitable for live") 
    }
}

planetList (" " + "Jupiter");
planetList (" " + "Mars");
planetList (" " + "Pluto");

function isEven (number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

console.log(isEven (11));
console.log(isEven (14));
console.log(isEven (29));
console.log(isEven (10));