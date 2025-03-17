// Classic Class
class Coder {
    name: string                  //Bu sınıfta erişim belirleyiciler (visibility modifiers) kullanılmamış.
    music: string                 //TypeScript’te varsayılan olarak tüm üyeler "public"tir, yani dışarıdan erişilebilir.
    age: number                   //Tüm değişkenler (name, music, age, lang) dışarıdan erişilebilir ve değiştirilebilir.
    lang: string

    constructor(name: string, music: string, age: number, lang: string) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang

    }

}
//Visibility modifiers (constructor'da define edilir!!!)

class Coder2 {
    constructor(
        public readonly name: string, //public → Dışarıdan erişilebilir.
        public music: string,         //readonly → Nesne oluşturulduktan sonra değiştirilemez.
        private age: number,          //private → Sadece bu sınıf içinde erişilebilir. Dışarıdan veya türetilmiş sınıflardan erişilemez.
        protected lang: string = 'English'      //protected → Türetilmiş (alt) sınıflar erişebilir ama dışarıdan erişilemez.
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang

    }

    public getAge() {
        return 'Hello I am ' + this.age
    }
}

const Dave = new Coder2('Dave', 'Rock', 42)//lang zaten yukarıda assign olduğu için sıkıntı olmaz.
console.log(Dave.getAge())
//console.log(Dave.age), age private old. icin erişemiyoruz
//console.log(Dave.lang), lang protected old. için sadece class ve onun subclasslarında erişebiliyoruz.

//Extends for Subclasses

class webDev extends Coder2 {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    ) {
        super(name, music, age) // extended from Coder2 class
        this.computer = computer
    }

    public getLang() {
        return "I write " + this.lang //lang protected old. icin sub classlarda kullanabildik (ama sadece class içinde)!
    }
}

const Sara = new webDev("Mac", "Sara", "Lofi", 23)
console.log(Sara.getLang())

//________________________________________IMPLEMENTS FOR INTERFACES in CLASS____________________________________________________//

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string //girdisi string ve return olarak string döndüren bir method
}

class Artist implements Musician {
    name: string
    instrument: string
    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }
    play(action: string) {
        return this.name + " " + action + " the " + this.instrument
    }
}

const Page = new Artist("Jimmy", "Guitar")
console.log(Page.play('strums'))


//_____________STATIC_CLASS_MEMBERS__________________ //

/**Static class member (statik sınıf üyesi), bir sınıfa ait olup,
o sınıftan oluşturulan nesnelerden bağımsız olan bir değişken veya metottur.
- Nesneye bağlı değildir, sınıfın kendisine aittir.
- Bellekte tek bir kopyası bulunur ve tüm nesneler tarafından paylaşılır.
- Sınıf adıyla çağrılır (örn. SınıfAdı.üyeAdı)*/

class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {

        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps('John')
const Steve = new Peeps("Steve")
const Amy = new Peeps("Amy")

console.log(Amy.id)
console.log(Steve.id)
console.log(John.id)

//______________________________GETTER & SETTER ______________________________//
//1. Constructor (Kurucu Metot): Nesne oluşturulduğunda çalışır	(new ClassAdı())
// - Sınıfın başlatılmasını sağlar.
// - new ile nesne oluşturulduğunda otomatik çalışır.
// - Parametre alabilir, nesneye özel değerler atanabilir.

//2. Getter (Erişim Metodu): Bir özelliği dış dünyaya okumak için (nesne.özellik)
// - Bir özelliği okumak için kullanılır.
// - Fonksiyon gibi çağrılmaz, değişken gibi kullanılır.

// 3. Setter (Ayarlama Metodu): Bir özelliğe değer atamak için	(nesne.özellik = değer)
// Bir özelliğe değer atamak için kullanılır.
// Koşullar ekleyerek kontrol mekanizması sağlayabilir.

//Ex:
class Bands {
    private dataState: string[]

    constructor() { //Parametre almaz, yani nesne oluştururken bir değer vermek zorunda değiliz.

        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) { // setter cannot return a value !!
        if (Array.isArray(value) && value.every(elements => typeof elements === "string")) {
            this.dataState = value
            return
        }
        else throw new Error("Param is not an array of strings")
    }
}

const MyBands = new Bands() //constructor provides
MyBands.data = ["Neil Young","Led Zep"] //getter provides
console.log (MyBands.data) 
MyBands.data = [...MyBands.data, "ZZ Top"] // setter provides , "...MyBands.data": var olan dataları getirir
console.log (MyBands.data) 