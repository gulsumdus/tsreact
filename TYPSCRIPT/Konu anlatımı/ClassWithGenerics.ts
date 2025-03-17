class StateObject<T> { // türünü aldığı değişkenlere göre belirlenen class!!!!
    private data: T

    constructor(value: T) {
        this.data = value
    }
    get state(): T { //değer döndürme
        return this.data
    }
    set state(value: T) { //değer atama
        this.data = value
    }
}

const store = new StateObject("John") //"john" olarak init ettiğimiz için string objesine döndü
console.log(store.state)
store.state= "David"

const myState = new StateObject <(string|number|boolean)[]>([])

console.log (myState.state[0]="hey")
console.log (myState.state[1]=123)
myState.state= (["Ahmet",34, true])
console.log(myState.state)
