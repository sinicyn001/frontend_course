// // функции
// function greet(){
//      console.log("абаюдна")
// }
// // вызов функции
// greet()

// // функция с аргументами
// function greetUser(name) {
//     console.log("Hello", name, "!");
// }

// greetUser("Alice")
// greetUser("Bob")
// let userName = prompt("Enter your name:");
// greetUser(userName)

// function NumberSum(a, b){
//     let sum = a + b;
//     console.log("sum of", a,  b, "is", sum);
// }
// NumberSum(6543634, 4323);
// NumberSum(634, 43);


// function myName(name){
//     return name;
// }

// let name = myName("абаюдна")
// alert("my name is", name)

// function Sum(a, b){
//     return a + b
// }
// let a_user = parseInt(prompt("Enter first number"))
// let b_user = parseInt(prompt("Enter second number"))
// let result = Sum(a_user, b_user )
// console.log("sum of", a_user, b_user, "is", result)

function NumberSum(a, b){
    let sum = a + b;
    return sum;
}
let result_sum = NumberSum(5,5)
console.log(result_sum)

function raznostSum(a, b){
    let raznost = a - b;
    return raznost;
}
let result_raznost = raznostSum(15,5)
console.log(result_raznost)

function ymnozenueSum(a, b){
    let ymnozenue = a * b;
    return ymnozenue
}
let result_ymnozenue = ymnozenueSum(2,5)
console.log(result_ymnozenue)

function delenueSum(a, b){
    let delenue = a / b;
    return delenue
}
let result_delenue = delenueSum(2,20)
console.log(result_delenue)


function octatokSum(a, b){
    let octatok = a % b;
    return octatok
}
let result_octatok = octatokSum(21,11)
console.log(result_octatok)
