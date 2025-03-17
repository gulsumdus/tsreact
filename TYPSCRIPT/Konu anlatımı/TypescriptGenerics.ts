// Typescript Generics:

//özellikle farklı türlerle çalışacak fonksiyonlar veya veri yapıları yazarken oldukça faydalıdır.
// Bir echo fonksiyonu düşünün. Bu fonksiyon herhangi bir türdeki değeri alıp, aynı türde geri döndürmeli. 
// Generic kullanarak, bu fonksiyon string, number, boolean gibi türlerle çalışabilir:

const echo = <T>(arg: T): T => arg;

console.log(echo("Hello")); // String
console.log(echo(42)); // Number
console.log(echo(true)); // Boolean


// <T> → Generic Type (Genel Tür) tanımlaması. T burada herhangi bir tür olabilir.
// (arg: T) → arg parametresi, T türünde bir değer alır.
// : T → Fonksiyonun dönüş tipi yine T türündedir.
// => arg → Fonksiyon sadece aldığı arg değerini geri döndürür.

const isObj = <T> (arg: T): boolean => { //input name : value şeklinde olup çıktı boolean (true/false) olacak 
    return (typeof arg === 'object' && !Array.isArray(arg) && arg  !== null )
}

console.log (isObj(true)) //false
console.log (isObj ('John')) // false 
console.log (isObj([1,2,3]))  //false
console.log (isObj(null)) //false
console.log (isObj({name: 'John'})) //TRUE !!

//___________________________INTERFACE with Generic Example_______________________________

interface BoolCheck <T> {
    value: T
    is: boolean
}

const checkBoolValue = <T> (arg: T): BoolCheck <T> => {
    if (Array.isArray(arg) && !arg.length){
        return {value: arg, is:false}
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length){
        return {value: arg, is: false}
    }
    return {value: arg, is: !!arg}

}
//*-*-*-**-*-*-*-*-*-*-extends with interface*-*-*-*-*-*-*-**-*-*-*-*-*-*
interface HasID{
    id:number
}
const processUser = <T extends HasID>(user: T): T=>{
    //process the user with logic here
    return user
}

console.log(processUser({id: 1, name: 'Dave'}))
//console.log(processUser({ name: 'Dave'})), id özellğini de almalı !!
