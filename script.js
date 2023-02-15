const displayEl = document.querySelector("h1");
const buttonEl = document.querySelectorAll("button");

// Helper Function(s)
const showInput = (param) => {
  displayEl.textContent == "0"
    ? (displayEl.textContent = param)
    : (displayEl.textContent += param);
};

// Adding Event Listeners to Relevant Buttons Using forEach

buttonEl.forEach((btn) => {
  if (btn.classList.length < 1 || btn.classList.contains("operator")) {
    btn.addEventListener("click", () => showInput(btn.value));
  }

  if (btn.classList.contains("equal-sign")) {
    btn.addEventListener(
      "click",
      () => (displayEl.textContent = eval(displayEl.textContent))
    );
  }
  if (btn.classList.contains("clear")) {
    btn.addEventListener("click", () => (displayEl.textContent = 0));
  }
});

//using for loop

// for (let i = 0; i <= buttonEl.length; i++) {
//   if (
//     buttonEl[i].classList.length < 1 ||
//     buttonEl[i].classList.contains("operator")
//   ) {
//     buttonEl[i].addEventListener("click", () => showInput(buttonEl[i].value));
//   }

//   if (buttonEl[i].classList.contains("equal-sign")) {
//     buttonEl[i].addEventListener(
//       "click",
//       () => (displayEl.textContent = eval(displayEl.textContent))
//     );
//   }
//   if (buttonEl[i].classList.contains("clear")) {
//     buttonEl[i].addEventListener("click", () => (displayEl.textContent = 0));
//   }
// }
