const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector(".submit");
const outputDiv = document.querySelector(".output-div");

const correctAnswers = ["Equilateral", "3", "All of its sides are equal lenghts", "Pythagoras", "Longest side of the Triangle"];

function checkAnswers() {
    const data = new FormData(quizForm);
    var score=0;
    var i=0;
    for(let entries of data.values()){
        if( entries === correctAnswers[i]){
            score++
        }
        i++
    }
    // console.log(score)
    outputDiv.innerText = "Your score for this quiz is " +score
}

submitButton.addEventListener("click", checkAnswers)