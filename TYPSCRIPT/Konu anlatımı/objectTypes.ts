//TS'de object type array olarak görülür ve array olarak assign edilebilir.
let bands1: string[]=[]
let myObj: object;
myObj=[]
console.log(typeof myObj)
myObj=bands1 // assign edilebilir
myObj= {} //bu şekilde dee gösterilebilir

const exampleObj = {
    prop1 : "Ahmet",
    prop2 : true //burada type belirtmesek bile prop1:string ve prop2: boolean tipinde olmak zorunda (const)!!!
}

exampleObj.prop1= "elif"
exampleObj.prop2= false


// OBJECT TYPE

type Guitarist = {
    name: string,
    active: boolean,
    albums: (string| number)[]
    year?: number // optional
}

let evh: Guitarist = {
    name: "Eddie",
    active: false,
    albums: [1984,"ob234"],
    year: 12
}
let jp: Guitarist = {
    name: "Jimmy",
    active: true,
    albums: ["I","II","IV"]
}

//Object Type as a Parameter

const greetguitarist = (guitarist : Guitarist) => {
    if(guitarist.year){
        return 'Hello '+ guitarist.name.toUpperCase()+ "!"
    }
    return 'Hello!'
}

console.log(greetguitarist(jp))
console.log(greetguitarist(evh))

//Interface Kullanımı: type yerine interface kullanılabilir
interface IGuitarist {   //yine type ile aynı şekilde çalışır!!
    name: string,
    active: boolean,
    albums: (string| number)[]
    year?: number // optional
}


