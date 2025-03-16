let stringArr = ["one", "two", "three"]  //belirtmesek de atadığımız verilerden dolayı array string türündedir.
let guitars = ['Strat', 'les paul', 4321] // atadığımız verilerden dolayı array union(string|number) türüne gelmiştir.
let mixed = ['EVH', 1908, true]// atadığımız verilerden dolayı array union(string|number|boolean) türüne gelmiştir.

stringArr[0]='john'
stringArr.push('hey')  //dizinin sonuna bu string data'sını ekler

guitars[0]= 1984 // bu array'in ilk elemanı string olmasına ragmen number olarak da başka elemnt atanabilir.
guitars.unshift('Jim') //Bu kod, guitars adlı bir dizinin başına 'Jim' öğesini eklemeye çalışır.

let test = [] 

let bands: string[]=[]
bands.push("a")//sting türünde bir eleman gönderilmeli