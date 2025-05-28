let products = [
    {
       name: "Мандарин",
       category: "Фрукты",
       price: 100
    },

    {
       name: "Laptop",
       category: "Электроника",
       price: "1000"
    },

    {name: "Куртка",
      category: "Одежда",
      price: "500"},

    {name: "Телефон",
      category: "Электроника",
      price: "5000"
   }
]
console.log(products)
console.log(products[0])
console.log(products[0].name)

// let expensiveProducts = []
// let electronicsProducts = []

let expensiveProducts = products.filter(product => product.price > 500)
let electronicsProducts = products.filter(product => product.category == "Электроника")

// for (product of products){
//    if (product.price > 500){
//       expensiveProducts.push(product)
//    }
//    if (product.category = "Электроника"){
//       electronicsProducts.push(product)
//    }
// }
console.log("Товары дороже 500 рублей", expensiveProducts)
console.log("Товары из категории электроники", electronicsProducts)
console.log("Количество Товаров дороже 500 рублей", expensiveProducts.length)
console.log("Количество товар из электроники", electronicsProducts.length)
console.log("Количество всех Товаров", products.length)