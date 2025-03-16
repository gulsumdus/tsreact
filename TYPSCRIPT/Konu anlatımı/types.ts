//komut: tsc -w ile .ts file .js file'a çevirilip çalıştırılır

let username: string = 'Dave'
let age: number;
let isLoading: boolean;
let album: any;
let unionType: string| number;
let isActive: string| number| any;
let re: RegExp = /\w+/g //Regular Expression

username= "John"
age= 9
isLoading= true
album= 4 //her hangi bir şey olabilir
unionType= "selam" // ya da number olabilir

//function

const sum = (a: number, b: number)=> { 
    return a + b //return number
}

const sum2 = (a: number, b: string)=> { 
    return a + b //return string
}