console.log("Hello, World!");
var myName = "John Doe";
console.log(myName)
var myAge = 30;
console.log(myAge)

// #Создание переменно через let
let MyCity = "New York";
console.log(MyCity);

const myCountry = "Canada";
console.log(myCountry);
// через var
let integerNumber = 42;
console.log(integerNumber)
let floatNumber = 3.14;
console.log(floatNumber)
let stringNumber = "123.45";
console.log(stringNumber)
let booleanNumber = true;
console.log(booleanNumber)
let nullValue = null;
console.log(nullValue)
let underfinedValue;
console.log(underfinedValue)
let objectValue = { name: 'John', age: 30};
console.log(objectValue)
console.log(objectValue.name)
console.log(objectValue["age"])
let arrayValue = [1, 2, 3, 4, 5,];
console.log(arrayValue);
console.log(arrayValue[0]);
console.log(arrayValue.length);
console.log(arrayValue[0] + arrayValue[1])
console.log(arrayValue[0] + arrayValue[1] + arrayValue[2])

let clickCount = 0;

document.addEventListener("DOMContentLoaded", () => {
     const button = document.createElement("button");
     button.textContent = "click me!";
     document.body.appendChild(button);

     button.addEventListener("click", () => {
         clickCount++;
         console.log("Button clicked", clickCount, "times");
     });
});