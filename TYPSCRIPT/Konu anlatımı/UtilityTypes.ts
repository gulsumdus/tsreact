// Utility Types

//1) Partial : sadece belirli bir eleman da yada elemanlarda değişiklik yapmak için kullanılır.

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return { ...assign, ...propsToUpdate }
}

const assign1: Assignment = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0 // örneğin biz bu grade'i güncellemek istiyoruz!
}

updateAssignment(assign1, { grade: 95 })
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 })
console.log(assignGraded)//{studentId: 'compsci123', title: 'Final Project', grade: 95}
//-*-**-**-**-*-**-*-*-*-*-*-*-**-**-*-*-*-*-**-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-**-*-**-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-
//2) Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    //send to database, etc.
    return assign
}

const assignVerified: Readonly<Assignment> = { ...assignGraded, verified: true }

//assignVerified.grade = 88, bu işe yaramaz, çünkü biz readonly yapıyoruz 95 olarak kalır yine !!!

//-*-**-**-**-*-**-*-*-*-*-*-*-**-**-*-*-*-*-**-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-**-*-**-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*
//3) Record

//ex1)
const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00ff00",
    blue: "0000FF"
}
//ex2)
type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
    Sara: "A",
    Kelly: "B"
}
//ex3)
interface Grades {
    assign1: number,
    assign2: number
}

const gradeData: Record<Students, Grades> = {
    Sara: { assign1: 34, assign2: 45 },
    Kelly: { assign1: 90, assign2: 100 }
}
//-*-**-**-**-*-**-*-*-*-*-*-*-**-**-*-*-*-*-**-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-**-*-**-*-*-*-*-**-*-*-**-*-*-**-*
//4) Pick and Omit(kaldır, atla)

interface Assignment2 {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}
//Pick:
type AssignResult = Pick<Assignment2, "studentId" | "grade">

const score: AssignResult = {
    studentId: "k123",
    grade: 85,
}
//Omit:
type AssignPreview = Omit<Assignment2, "grade" | "verified"> //bu iki özellik kladırıldı !!

const preview: AssignPreview = {
    studentId: "k123",
    title: "Final Proj"
}

//-*-**-**-**-*-**-*-*-*-*-*-*-**-**-*-*-*-*-**-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-**-*-**-*-*-*-*-**-*-*-**-*-*-**-*
//5) Exclude and Extract

//Exclude:
type adjustedGrade = Exclude<LetterGrades, "U"> //U hariç hepsini alır
//Extract:
type highGrades = Extract<LetterGrades, "A" | "B"> // A ve B'yi seçer

//-*-**-**-**-*-**-*-*-*-*-*-*-**-**-*-*-*-*-**-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-**-*-**-*-*-*-*-**-*-*-**-*-*-**-*
//6) Nonnullable

type AllpossibleGrades = "DC" | "DD" | null | undefined
//-*-**-**-**-*-**-*-*-*-*-*-*-**-**-*-*-*-*-**-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-**-*-**-*-*-*-*-**-*-*-**-*-*-**-*
//7) Return Type
//Normalde:
/*type newAssign = { title: string, points: number }
const createNewAssign = (title: string, points: number) : newAssign=> {
    return { title, points }
}*/
//Return Type'da:
const createNewAssign = (title: string, points: number) => {
    return { title, points }
}
type newAssign = ReturnType<typeof createNewAssign>
///
const tsAssign: newAssign = createNewAssign("Utility Types", 100)
console.log(tsAssign) //{title: 'Utility Types', points: 100}

//-*-**-**-**-*-**-*-*-*-*-*-*-**-**-*-*-*-*-**-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-**-*-**-*-*-*-*-**-*-*-**-*-*-**-*
//8) Parameters:
type AssignParams = Parameters<typeof createNewAssign>
///
const assignArgs: AssignParams = ["Generics", 100]
//
const tsAssign2: newAssign = createNewAssign(...assignArgs)
console.log(tsAssign2)
//-*-**-**-**-*-**-*-*-*-*-*-*-**-**-*-*-*-*-**-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-**-*-**-*-*-*-*-**-*-*-**-*-*-**-*
//9) Awaited : helps us with the ReturnType of a Promise

interface User {
    id: number,
    name: string,
    username: string,
    email: string
}

const fetchUser = async (): Promise<User[]> => { // Asenkron fonksiyon, Promise<User[]> döndürür
    const data = await fetch( // API'den veri çek
        'https://jsonplaceholder.typicode.com/users'
    ).then(response => { return response.json() } // Yanıtı JSON formatına çevir
    ).catch(err => { // Hata yakalama bloğu
        if (err instanceof Error) console.log(err.message) // Hata mesajını konsola yazdır
    })
    return data // Çekilen kullanıcı verisini döndür
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUser>> // fetchUser'ın dönüş türünü User[] olarak çöz

fetchUser().then(users => console.log(users)) // fetchUser'ı çağır, veriyi aldıktan sonra ekrana yazdır


// Awaited olmadan tür Promise<User[]> olur ve doğrudan User[] elemanlarına erişemezsin.
// Awaited ile User[] olarak çözülür ve daha rahat kullanılabilir.

//Promise:
//Promise, asenkron işlemleri yönetmek için kullanılır.
//Gerçek hayatta API çağrılarında, dosya okuma/yazma işlemlerinde, zamanlayıcılarla çalışırken kullanılır.