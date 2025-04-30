let sun = 10 + 5
console.log(sun)

let a = 10 - 5
console.log(a)

let b = 10 * 5
console.log(b)

let c = 10 / 5
console.log(c)

let d = 10 / 4
console.log(d)

let e = 10 % 3
console.log(e)

let f = 10 == 10
console.log(f)

let q = (10 == "10")
console.log(q)

let y = (10 === "10")
console.log(y)

let z = (10 != "10")
console.log(z)

let p = (10 != "10")
console.log(p)

let v = (10 > 5)
console.log(v)


let l = (10 < 5)
console.log(l)

let g = (10 > 5) && (8 < 10)
console.log(g)

let u = (10 > 5) || (8 < 10)
console.log(u)

let o = !(false)
console.log(o)

let age = 17

if (age >= 18) {
    console.log("Вы совершеннолетний")
} else {
    console.log("Вы не совершеннолетний")
}

let ageMax = 17

if (ageMax >= 18) {
    console.log("Вы совершеннолетний")
} else if (ageMax >= 18 && ageMax <60) {
    console.log("Вы не совершеннолетний")
} else{
    console.log("Вы пенсионер")
}