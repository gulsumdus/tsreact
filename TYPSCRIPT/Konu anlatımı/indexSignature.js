"use strict";
//Index signature: { [keyType]: valueType } ve keyof ile birlikte kullanılıyor !!!!
//Burada:
//    keyType: string veya number olabilir.
//    valueType: Key’lere karşılık gelen değerin tipidir.
//Index Signature, TypeScript'te bir nesnenin dinamik ve bilinmeyen anahtarlara (key) sahip olmasını sağlayan bir yapıdır.
const words = {
    hello: "Merhaba",
    world: "Dünya"
};
console.log(words["hello"]); // Merhaba
// todaysTransactions.Pizza = 15, yapamayız !!
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
let prop = "Pizza";
console.log(todaysTransactions[prop]);
////////////////////////////////////
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
// Non-existing Properties: 
const David = todaysTransactions['David']; //örn yukarıda David obje elemanı olmamasına rağmen hata vermez
console.log(David); //fakat undefined olarak algılanır?!!
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
//__________________________________KEY_OF_ASSERTIONS______________________________________//
// keyof operatörü, bir nesnenin tüm anahtarlarını union type (birleşim türü) olarak döndürür.
// Yalnızca geçerli anahtarlarla çalışılmasını sağlar.
//1) for...in Döngüsü Kullanımı
for (const key in student) { // Tüm enumerable (numaralandırılabilir) özellikleri döner (Yani student nesnesinin kendi ve kalıtım yoluyla gelen tüm özellikleri dahil).
    console.log(key + " : " + student[key]);
}
//2) Object.keys(...).map() Kullanımı
Object.keys(student).map(key => {
    console.log(student[key]); // Sadece nesnenin kendi özelliklerini döndürür, prototipten gelenleri almaz.
});
const roles = {
    admin: "Full Access",
    user: "Limited Access",
    guest: "Read-Only"
};
console.log(roles.admin); // "Full Access"
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
