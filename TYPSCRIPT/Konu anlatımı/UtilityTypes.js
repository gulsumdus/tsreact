"use strict";
// Utility Types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0 // örneğin biz bu grade'i güncellemek istiyoruz!
};
updateAssignment(assign1, { grade: 95 });
const assignGraded = updateAssignment(assign1, { grade: 95 });
console.log(assignGraded); //{studentId: 'compsci123', title: 'Final Project', grade: 95}
//-*-**-**-**-*-**-*-*-*-*-*-*-**-**-*-*-*-*-**-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-**-*-**-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-
//2) Required and Readonly
const recordAssignment = (assign) => {
    //send to database, etc.
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
//assignVerified.grade = 88, bu işe yaramaz, çünkü biz readonly yapıyoruz 95 olarak kalır yine !!!
//-*-**-**-**-*-**-*-*-*-*-*-*-**-**-*-*-*-*-**-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-**-*-**-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*
//3) Record
//ex1)
const hexColorMap = {
    red: "FF0000",
    green: "00ff00",
    blue: "0000FF"
};
const finalGrades = {
    Sara: "A",
    Kelly: "B"
};
const gradeData = {
    Sara: { assign1: 34, assign2: 45 },
    Kelly: { assign1: 90, assign2: 100 }
};
const score = {
    studentId: "k123",
    grade: 85,
};
const preview = {
    studentId: "k123",
    title: "Final Proj"
};
//-*-**-**-**-*-**-*-*-*-*-*-*-**-**-*-*-*-*-**-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-**-*-**-*-*-*-*-**-*-*-**-*-*-**-*
//7) Return Type
//Normalde:
/*type newAssign = { title: string, points: number }
const createNewAssign = (title: string, points: number) : newAssign=> {
    return { title, points }
}*/
//Return Type'da:
const createNewAssign = (title, points) => {
    return { title, points };
};
///
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign); //{title: 'Utility Types', points: 100}
///
const assignArgs = ["Generics", 100];
//
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch(// API'den veri çek
    'https://jsonplaceholder.typicode.com/users').then(response => { return response.json(); } // Yanıtı JSON formatına çevir
    ).catch(err => {
        if (err instanceof Error)
            console.log(err.message); // Hata mesajını konsola yazdır
    });
    return data; // Çekilen kullanıcı verisini döndür
});
fetchUser().then(users => console.log(users)); // fetchUser'ı çağır, veriyi aldıktan sonra ekrana yazdır
// Awaited olmadan tür Promise<User[]> olur ve doğrudan User[] elemanlarına erişemezsin.
// Awaited ile User[] olarak çözülür ve daha rahat kullanılabilir.
//Promise:
//Promise, asenkron işlemleri yönetmek için kullanılır.
//Gerçek hayatta API çağrılarında, dosya okuma/yazma işlemlerinde, zamanlayıcılarla çalışırken kullanılır.
