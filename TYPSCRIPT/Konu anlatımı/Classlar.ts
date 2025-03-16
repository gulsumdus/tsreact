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
        protected lang: string= 'English'      //protected → Türetilmiş (alt) sınıflar erişebilir ama dışarıdan erişilemez.
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang

    }

    public getAge(){
        return 'Hello I am' + this.age
    }
}

const Dave = new Coder2('Dave', 'Rock', 42)//lang zaten yukarıda assign olduğu için sıkıntı olmaz.
console.log(Dave.getAge())
//console.log(Dave.age), age private old. icin erişemiyoruz
//console.log(Dave.lang), lang protected old. için sadece class ve onun subclasslarında erişebiliyoruz.

//Extends for Subclasses