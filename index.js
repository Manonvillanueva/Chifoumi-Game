// ---------------
// VARIABLES
// ----------
const btns = document.querySelectorAll(".btns");

// ---------------
// GENERATE A NUMBER (0-2) with Math random to assign it to the pcChoice const
// ----------
const randomChifoumi = () => {
  const random = Math.ceil(Math.random() * 3);
  let resultRandom = "";

  if (random === 1) {
    resultRandom = "pierre";
  } else if (random === 2) {
    resultRandom = "feuille";
  } else {
    resultRandom = "ciseaux";
  }
  return resultRandom;
};

// ---------------
// GAME'S RULES
// ----------
const gameplay = (pcChoice, userChoice) => {
  const message = document.getElementById("message");
  if (pcChoice === userChoice) {
    return (message.textContent = "Match Nul");
  } else if (pcChoice === "pierre") {
    message.textContent =
      userChoice === "feuille" ? "BRAVO c'est Gagné" : "OUPS ... Perdu";
  } else if (pcChoice === "feuille") {
    message.textContent =
      userChoice === "ciseaux" ? "BRAVO c'est Gagné" : "OUPS ... Perdu";
  } else if (pcChoice === "ciseaux") {
    message.textContent =
      userChoice === "pierre" ? "BRAVO c'est Gagné" : "OUPS ... Perdu";
  }
};

// ---------------
// SCORE UPDATE
// ----------
const score = () => {
  if (message.textContent === "Match Nul") {
    message.style.color = "#E48AB0";
  }
  if (message.textContent.includes("Perdu")) {
    pcScoreDisplay.textContent++;
    message.style.color = "#F6AA56";
  }
  if (message.textContent.includes("Gagné")) {
    userScoreDisplay.textContent++;
    message.style.color = "#c4e93a";
  }
};

// ---------------
// EVENT TO LAUNCH THE GAME
// => extract the user's choice with the button's id
// ----------
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const userChoice = e.target.id;
    const pcChoice = randomChifoumi();
    gameplay(pcChoice, userChoice);
    score();
    gameMessage.textContent = `Vous avez joué "${userChoice.toUpperCase()}" et l'ordinateur a joué "${pcChoice.toUpperCase()}"`;

    // => after the user's choice, the btns become disabled
    btns.forEach((btn) => {
      btn.disabled = true;
      btn.classList.add("hoverNone");
    });

    // => create new button each round ("btnContinue")
    const btnContinue = document.createElement("button");
    btnContinue.textContent = "Continuer";
    btnContinue.id = "btnContinue";
    gameContainer.appendChild(btnContinue);

    // EVENT btnContinue
    btnContinue.addEventListener("click", () => {
      btnContinue.remove();
      btns.forEach((btn) => {
        btn.disabled = false;
        btn.classList.remove("hoverNone");
      });
      message.textContent = "";
      gameMessage.textContent = "";
    });
  });
});
