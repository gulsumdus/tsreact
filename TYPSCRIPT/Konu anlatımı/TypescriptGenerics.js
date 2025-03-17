"use strict";
// Typescript Generics:
//özellikle farklı türlerle çalışacak fonksiyonlar veya veri yapıları yazarken oldukça faydalıdır.
// Bir echo fonksiyonu düşünün. Bu fonksiyon herhangi bir türdeki değeri alıp, aynı türde geri döndürmeli. 
// Generic kullanarak, bu fonksiyon string, number, boolean gibi türlerle çalışabilir:
const echo = (arg) => arg;
console.log(echo("Hello")); // String
console.log(echo(42)); // Number
console.log(echo(true)); // Boolean
// <T> → Generic Type (Genel Tür) tanımlaması. T burada herhangi bir tür olabilir.
// (arg: T) → arg parametresi, T türünde bir değer alır.
// : T → Fonksiyonun dönüş tipi yine T türündedir.
// => arg → Fonksiyon sadece aldığı arg değerini geri döndürür.
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(true)); //false
console.log(isObj('John')); // false 
console.log(isObj([1, 2, 3])); //false
console.log(isObj(null)); //false
console.log(isObj({ name: 'John' })); //TRUE !!
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    //process the user with logic here
    return user;
};
console.log(processUser({ id: 1, name: 'Dave' }));
//console.log(processUser({ name: 'Dave'})), id özellğini de almalı !!
