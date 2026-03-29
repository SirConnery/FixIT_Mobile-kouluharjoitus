const faqCards = document.getElementById("faq-cards");

function cFaqCards() {
  faqCards.innerHTML = "";

  let card = document.createElement("div");
  card.classList.add("faq-card");

  let cardQuestionArea = document.createElement("div");
  cardQuestionArea.classList.add("faq-card-question-area");

  let cardQuestion = document.createElement("h3");
  cardQuestion.classList.add("faq-card-question");
  cardQuestion.textContent = "Question";

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
  cardAnswer.textContent = "Answer";

  cardQuestionArea.append(cardQuestion);
  cardAnswerArea.append(cardAnswer);
  card.append(
    cardQuestionArea,
    cardTextSeparator,
    showAnswerBtn,
    cardAnswerArea,
  );
  faqCards.append(card);

  showAnswerBtn.addEventListener("click", showAnswer);
}

function showAnswer(event) {
  const btn = event.currentTarget;
  const card = btn.closest(".faq-card");
  const answerArea = card.querySelector(".faq-card-answer-area");

  answerArea.classList.remove("hidden");
}

cFaqCards();
