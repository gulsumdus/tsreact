"use strict";
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("John"); //"john" olarak init ettiğimiz için string objesine döndü
console.log(store.state);
store.state = "David";
const myState = new StateObject([]);
console.log(myState.state[0] = "hey");
console.log(myState.state[1] = 123);
myState.state = (["Ahmet", 34, true]);
console.log(myState.state);
