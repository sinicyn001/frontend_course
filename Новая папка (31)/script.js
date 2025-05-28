let myButton = document.getElementById("myButton");

myButton.addEventListener("click", function (){
    alert('кнопка была нажата')
})

function handleClick(){
    alert("Кнопка 2 была нажата")
}

let myButton2 = document.getElementById("myButton2")

myButton2.addEventListener("click", function(){
    handleClick2("привет")
})

function handleClick2(message){
    alert(message);
}

const lightButton = document.getElementById("light")
const blackButton = document.getElementById("black")

lightButton.addEventListener('click', function(){
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
})

blackButton.addEventListener('click', function(){
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
})