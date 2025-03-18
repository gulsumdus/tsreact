import ListItem from './ListItem'

interface List {
    list: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(itemObj: ListItem): void,
    removeItem(id: string): void
}

export default class FullList implements List {

    static instance: FullList = new FullList()
    //Singleton Mantığı: instance adlı statik özelliği sayesinde her zaman aynı nesneyi kullanıyoruz.


    private constructor(private __list: ListItem[] = []) {
        //private constructor, dışarıdan nesne oluşturmayı engellemek için kullanılır
        //private __list özelliği, listeyi gizli tutuyor.
        //  //Eğer bir sınıfta private constructor varsa, o sınıfın alt sınıfları (subclass) da oluşturulamaz.
    }

    get list(): ListItem[] { //listeye erişmek için kullanılır.
        return this.__list
    }

    load(): void {
        const storedList: string | null = localStorage.getItem("myList")
        if (typeof storedList !== "string") return //boş döndürdük

        const parsedList: { _id: string; _item: string; _checked: boolean }[] = JSON.parse(storedList)

        parsedList.forEach(itemObj => {
            const newlistItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked)
            FullList.instance.addItem(newlistItem)
        });

    }


save(): void {
    localStorage.setItem("myList", JSON.stringify(this.__list))
}
clearList(): void {
    this.__list = []
        this.save()
}

addItem(itemObj: ListItem): void {
    this.__list.push(itemObj)
        this.save()
}

removeItem(id: string): void {
    this.__list = this.__list.filter(item => item.id !== id)
        this.save()
}

}




//Singleton: Bir sınıftan yalnızca tek bir nesne oluşturulmasını sağlamak için kullanılır, burada dizi oluşturuyoruz!!