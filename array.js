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

let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September"];
let part =  month.slice(1,4);

console.log(month,part);

let day  = [
            "Saturday", // 0 = -7
            "Sunday", // 1 = -6
            "Monday", // 2 = -5
            "Tuesday", // 3 = -4
            "Wednesday", // 4 -3
            "Thursday", // 5 = -2
            "Friday" // 6 = -1
                    ];
// let list = day.slice(-2); //slice from this
let list =  day.slice(-6, -2);

console.log(day,list);

let days  = [
    "Saturday", // 0 = -7
    "Sunday", // 1 = -6
    "Monday", // 2 = -5
    "Tuesday", // 3 = -4
    "Wednesday", // 4 -3
    "Thursday", // 5 = -2
    "Friday" // 6 = -1
            ];
    let lists = days.splice(1,4);
    console.log(days,lists);

    // array copy

    let toy = [
        "Ball", // 0 = -6
        "Doll",  //  1 = -5
        "Train", // 2 = -4
        "Teddy", // 3 = -3
        "Rubber Duck", // 4 = -2
        "Kite" // 5 = -1
    ]
    
    // deep copy
    // let toy2 = toy;
    // toy2[2] = "Bike";
    // console.log(toy,toy2);

    //shallow copy
    let toy2 = toy.slice();
    toy2[3] = "Airplane";
    console.log(toy,toy2);

    // add array

    let daysOfWeek1 = ["Sunday", "Monday", "Tuesday",];
    let daysOfWeek2 = ["Wednesday", "Thursday", "Friday"];
    let daysOfWeek3 = ["Saturday"];

    // let daysOfWeek = daysOfWeek1.concat(daysOfWeek2,daysOfWeek3);
    // OR
    let daysOfWeek = [].concat(daysOfWeek1, daysOfWeek2, daysOfWeek3);
    console.log(daysOfWeek);

    // array loop

    let bird = ["Bubba", "Scruffy", "Baldy", "Screech", "Zippy", "Plucky",
        "Daffy", "Flossy"];
    // let length = bird.length;
    for (let i = 0; i <bird.length ; i ++) {
        console.log("Element at", i , "offset is", bird [i])
    }
    // or
    for (i in bird) {
        console.log("Element at", i, "offset is", bird[i])
    }
    // reverse
    // let length = bird.length;
    for (let i = (bird.length-1); i>=0; i--) { 
        console.log("Element", i , "offset is", bird[i])
    }


    // sequence 

    let list4 = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    list4.sort(); // display sequence;
    console.log(list4);

    let list5 = [1, 6, 5, 57, 224, 6, 25, 0, 10, 50, 84];
    list5.sort();
    console.log(list5);

    let a = 1, b = 6; //reverse number
    let c = a;
        a = b;
        b = c;
    console.log(a,b);

    // OR
    let e = 2, f = 5; //here e means a and f means b
    [e, f] = [e,f];
    console.log(e,f);

    let list6 = [1, 6, 5, 57, 220, 57, 84, 8005, 72, 24, 6, 25, 00, 10, 50, 84];
    // list6.sort();
    // console.log(list6);

    let length = list6.length-1;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if ( list6 [j] > list6 [j+1]) {
            [list6[j], list6[j+1] ] = [list6 [j+1], list6[j] ];
            }
        }
    }

    console.log(list6);

    // nesting array
    let year2 = [
        ["January", "February", "March"],
        ["April", "May"],
        ["June", "July", "August"]
    ]

    for (let i = 0; i<year2.length; i++) {
        let row = year2[i];
        console.log(`Part #${i+1}`)
        for (let x = 0; x <row.length; x++) {
            console.log(row[x])
        }
    }