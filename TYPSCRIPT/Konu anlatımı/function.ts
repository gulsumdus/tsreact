const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message) // void olmasının nedeni hiç bir şeyi return etmemesidir.
}

logMsg('Hello!')
logMsg(add(2, 3))

// Function aliases & keyword, interface

let subtract = function (c: number, d: number): number { return c - d }
console.log(subtract(9, 3))


//type mathFunction = (a: number, b: number) => number, interface olarak da aynı görevi görür
interface mathFunction { (a: number, b: number): number } //interface hali daha kullanışlıdır!! 

let multiply: mathFunction = function (c, d) {
    return c * d
}

logMsg(multiply(2, 4))

//optional Parameters

const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c
    }
    return a + b
}

//default param

const sumAll = (a: number = 10, b: number, c: number = 3): number => {
    return a + b + c
}

logMsg(addAll(2, 3, 3))//8
logMsg(addAll(2, 3))//5
logMsg(sumAll(2, 3))//8
logMsg(sumAll(undefined, 4))//10+4+3 = 17

const createError = (errMsg: string) : never => { //TypeScript’te never türü, bir fonksiyonun asla bir değer döndürmeyeceğini belirtmek için kullanılır.
    throw new Error(errMsg)
}

// custom type guard

const isNumber = (value:any):boolean => {
    return typeof value === 'number'
    ? true : false
}

// use of the never type

const numberorString = (value : number | string ):
string => {
    if ( typeof value === 'string') return 'string'
    if (isNumber(value)) return 'number'
    return createError("this should never Happen!")
}