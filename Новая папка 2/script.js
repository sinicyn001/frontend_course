const header = document.getElementById("header");
header.style.backgroundColor = "yellow";


const notes = document.querySelectorAll(".note");
notes.forEach(note => {
  note.style.border = "1px solid gray";
});

const box = document.createElement("div");
box.className = "box";
box.innerHTML = "Привет из JS"
document.body.appendChild(box);