"use strict";
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
const userArray = [
    { "id": 1,
        "name": "Lennie Graham",
        "username": "Bret",
        "email": "Sincere@april.com"
    },
    { "id": 2,
        "name": "Jonh Graham",
        "username": "Boyz",
        "email": "boyzJohn@gmail.com"
    }
];
console.log(getUsersProperty(userArray, "name")); // ['Lennie Graham', 'Jonh Graham']
console.log(getUsersProperty(userArray, "email")); //['Sincere@april.com', 'boyzJohn@gmail.com']
