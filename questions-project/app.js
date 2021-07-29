
const btns = document.querySelectorAll('.question-btn');

btns.forEach(function (btn){
   btn.addEventListener("click", function(display) {
    const currentQuestion = display.currentTarget.parentElement.parentElement;
    currentQuestion.classList.toggle("show-text");
   });
});