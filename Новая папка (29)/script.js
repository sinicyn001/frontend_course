console.log(document.getElementById("title"))
console.log(document.getElementById("title").innerHTML)

let title = document.getElementById("title")
console.log(title.innerHTML)
console.log(title)

let description = document.getElementsByClassName('description')
console.log(description)
console.log(description[0].innerHTML)
console.log(description[1].innerHTML)

let i_tag = document.getElementsByTagName('i')
console.log(i_tag)
console.log(i_tag[0].innerHTML)
console.log(i_tag[1].innerHTML)

let querySelector = document.querySelector('#title')
console.log(querySelector)
console.log(querySelector.innerHTML)

let querySelectorClass = document.querySelector('.description')
console.log(querySelectorClass)
console.log(querySelectorClass.innerHTML)

let content = document.getElementById('content')
console.log(content)
console.log(content.innerHTML)
console.log(content.innerText)

title.style.color = "red"
description[0].style.fontSize = "30px"
description[0].style.marginBottom = "20px"


content.style.backgroundColor = "Lightblue"

let primer = document.getElementById('primer')
primer.style.color = "green"
primer.style.fontSize = "30px"
primer.style.fontWeight = "bold"
primer.style.textAlign = "center"

let newParagraph = document.createElement('p')
newParagraph.innerText = "This is a new text"
newParagraph.style.color = "blue"
document.body.appendChild(newParagraph)

primer.remove() //Пример удаления тега