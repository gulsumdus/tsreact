"use strict";
//TS'de object type array olarak görülür ve array olarak assign edilebilir.
let bands1 = [];
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands1; // assign edilebilir
myObj = {}; //bu şekilde dee gösterilebilir
const exampleObj = {
    prop1: "Ahmet",
    prop2: true //burada type belirtmesek bile prop1:string ve prop2: boolean tipinde olmak zorunda (const)!!!
};
exampleObj.prop1 = "elif";
exampleObj.prop2 = false;
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, "ob234"],
    year: 12
};
let jp = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"]
};
//Object Type as a Parameter
const greetguitarist = (guitarist) => {
    if (guitarist.year) {
        return 'Hello ' + guitarist.name.toUpperCase() + "!";
    }
    return 'Hello!';
};
console.log(greetguitarist(jp));
console.log(greetguitarist(evh));
