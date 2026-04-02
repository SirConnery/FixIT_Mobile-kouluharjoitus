const faqCards = document.getElementById("faq-cards");

function cFaqCards() {
  faqCards.innerHTML = "";

  questions.forEach((question, index) => {
    let card = document.createElement("div");
    card.classList.add("faq-card");

    let cardQuestionArea = document.createElement("div");
    cardQuestionArea.classList.add("faq-card-question-area");

    let cardQuestion = document.createElement("h3");
    cardQuestion.classList.add("faq-card-question");
    cardQuestion.textContent = question.question;

    let cardTextSeparator = document.createElement("hr");
    cardTextSeparator.classList.add("faq-card-separator");

    let showAnswerBtn = document.createElement("button");
    showAnswerBtn.classList.add("faq-show-answer-btn");
    showAnswerBtn.textContent = "Show answer";

    let cardAnswerArea = document.createElement("div");
    cardAnswerArea.classList.add("faq-card-answer-area");
    cardAnswerArea.classList.add("hidden");

    let cardAnswer = document.createElement("p");
    cardAnswer.classList.add("faq-card-answer");
    cardAnswer.textContent = question.answer;

    cardQuestionArea.append(cardQuestion);
    cardAnswerArea.append(cardAnswer);
    card.append(
      cardQuestionArea,
      cardTextSeparator,
      showAnswerBtn,
      cardAnswerArea,
    );
    faqCards.append(card);

    showAnswerBtn.addEventListener("click", showHideanswer);
  });
}

function showHideanswer(event) {
  const btn = event.currentTarget;
  const card = btn.closest(".faq-card");
  const answerArea = card.querySelector(".faq-card-answer-area");

  if (btn.textContent === "Show answer") {
    btn.textContent = "Hide answer";
    answerArea.classList.remove("hidden");
  } else if (btn.textContent === "Hide answer") {
    btn.textContent = "Show answer";
    answerArea.classList.add("hidden");
  }
}

function runAll() {
  cFaqCards();
}

runAll();
