let maintext = document.getElementById('maintext');
maintext.style.color = "blue";


let newParagraph = document.createElement('p');
newParagraph.innerText = "Привет из js";
document.body.appendChild(newParagraph);

let  elements = document.getElementsByClassName('highlight');
for  (let element of elements){
    element.style.fontSize = "20px"
}
