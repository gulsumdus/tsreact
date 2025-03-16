"use strict";
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message); // void olmasının nedeni hiç bir şeyi return etmemesidir.
};
logMsg('Hello!');
logMsg(add(2, 3));
// Function aliases & keyword, interface
let subtract = function (c, d) { return c - d; };
console.log(subtract(9, 3));
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 4));
//optional Parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//default param
const sumAll = (a = 10, b, c = 3) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 3)); //8
logMsg(addAll(2, 3)); //5
logMsg(sumAll(2, 3)); //8
logMsg(sumAll(undefined, 4)); //10+4+3 = 17
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
// use of the never type
const numberorString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError("this should never Happen!");
};
