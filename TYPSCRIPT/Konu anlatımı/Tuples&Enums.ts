//Arraylerde, array uzunluğu veya elelementlerin türleri fark etmiyor.Fakat tuple'slarda bu böyle değildir.
//TUPLES: it has to be included specific lenght and specific types

let mytuple: [string, number, boolean] = ['Dave', 40, true]

let unionArray = ['John', 54, false]   // her iki arrayde de elementler aynı type olabilir fakat tupple olanı ayriyetten tanımladık!!!

// unionArray = mytuple, bu şekilde atama yapılabilir hiç sıkınti olmadan fakat
// mytuple=unionArray, bu şekilde hata verecektir!!!  

mytuple[0]= "Ali"
mytuple[1]= 56
mytuple[2]= false //buna göre tür konumuna göre assign yapılablir!!!

//_______________________________Enums___________________________________//

enum Grade {
    U=6, D, C, B, A
}
console.log(Grade.A)