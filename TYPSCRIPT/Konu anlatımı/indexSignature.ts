//Index signature: { [keyType]: valueType } ve keyof ile birlikte kullanılıyor !!!!
//Burada:
//    keyType: string veya number olabilir.
//    valueType: Key’lere karşılık gelen değerin tipidir.
//Index Signature, TypeScript'te bir nesnenin dinamik ve bilinmeyen anahtarlara (key) sahip olmasını sağlayan bir yapıdır.

//Example:
type Dictionary = { [key: string]: string };

const words: Dictionary = {
    hello: "Merhaba",
    world: "Dünya"
};

console.log(words["hello"]); // Merhaba
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface TransactionObj {
    Pizza: number,
    Books: number,
    Job: number
}

interface TransactionObj {
    readonly [index: string]: number //elemanları bilmiyoruz fakat tipini burada belirliyoruz !!
} //readonly, assagidaki objenin herhangi bir elemana değer atama değişikliği yapmaz
// todaysTransactions.Pizza = 15, yapamayız !!

const todaysTransactions: TransactionObj = { //obje
    Pizza: - 10,
    Books: -5,
    Job: 50
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions["Pizza"])

let prop: string = "Pizza"
console.log(todaysTransactions[prop])

////////////////////////////////////

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0
    for (const transaction in transactions) {
        total += transactions[transaction]
    }
    return total
}
console.log(todaysNet(todaysTransactions))

// Non-existing Properties: 

const David = todaysTransactions['David'] //örn yukarıda David obje elemanı olmamasına rağmen hata vermez
console.log(David) //fakat undefined olarak algılanır?!!

//_________________________________________Optional Properties____________________________________________\\

interface Student {
    [key: string]: string | number | number[] | undefined //optional old. undefined türünü de eklemek gerekir !!!!
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
}
//__________________________________KEY_OF_ASSERTIONS______________________________________//
// keyof operatörü, bir nesnenin tüm anahtarlarını union type (birleşim türü) olarak döndürür.
// Yalnızca geçerli anahtarlarla çalışılmasını sağlar.

//1) for...in Döngüsü Kullanımı
for (const key in student) {// Tüm enumerable (numaralandırılabilir) özellikleri döner (Yani student nesnesinin kendi ve kalıtım yoluyla gelen tüm özellikleri dahil).
    console.log(key + " : " + student[key as keyof Student])
}

//2) Object.keys(...).map() Kullanımı
Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student]) // Sadece nesnenin kendi özelliklerini döndürür, prototipten gelenleri almaz.
})

//__________________________________________ the Record Utility Type________________________________________________//

// TypeScript’te Record<K, V>, belirli bir
//  anahtar (key) türüne karşılık gelen değer (value) 
//  türünü tanımlayan bir yardımcı (utility) türdür.

// Example:
type UserRoles = Record<string, string>;

const roles: UserRoles = {
    admin: "Full Access",
    user: "Limited Access",
    guest: "Read-Only"
};

console.log(roles.admin); // "Full Access"
//-*-**-*-**-*-**-*-**-**-*-**-**-*-**-*-**-*-**-*-*-**-*-**-*-*-*-*-*

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams, string | number>

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
}

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes])
}