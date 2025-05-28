let current = 2;
const slides = document.querySelectorAll(".slide");

function showSlide(index){
  for (let i = 0; i < slides.length; i++){
        if(i ===index){
            slides[i].classList.add('active');
        } else {
            slides[i].classList.remove('active');
        }
            
    }
}
setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
}, 2000)

console.log(slides)
showSlide(current);