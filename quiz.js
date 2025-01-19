function checkAnswer() {
  //function correct answer
  const correctAnswer = "4";
}
const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedOption ? selectedOption.value : null;

const feedbackElement = document.getElementById("feedback");
if (!userAnswer) {
        feedbackElement.textContent = "Please select an answer before submitting.";
        feedbackElement.style.color = "orange";
        return;
    }

if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "red";
    }

