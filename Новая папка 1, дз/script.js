const header = document.getElementById("header");
header.style.backgroundColor = "yellow";

const notes = document.querySelectorAll(".note");
notes.forEach(note => {
  note.style.border = "1px solid gray";
});

const box = document.createElement("div");
box.className = "box";
document.body.appendChild(box);