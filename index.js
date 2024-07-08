// ---------------
// VARIABLES
// ----------
const btns = document.querySelectorAll(".btns");

// ---------------
// VALUE OF PC CHOICE thanks to random
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
    return (message.textContent = "égalité");
  } else if (pcChoice === "pierre") {
    message.textContent =
      userChoice === "feuille" ? "USERVICTORY" : "PCVICTORY";
  } else if (pcChoice === "feuille") {
    message.textContent =
      userChoice === "ciseaux" ? "USERVICTORY" : "PCVICTORY";
  } else if (pcChoice === "ciseaux") {
    message.textContent = userChoice === "pierre" ? "USERVICTORY" : "PCVICTORY";
  }
};

// ---------------
// SCORE UPDATE
// ----------
const score = () => {
  if (message.textContent === "égalité") {
    console.log("coucou");
  }
  if (message.textContent.includes("PC")) {
    console.log("PCWIN");
  }
  if (message.textContent.includes("USER")) {
    console.log("USERWIN");
  }
};

// ---------------
// EVENT TO LAUNCH THE GAME
// ----------
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const userChoice = e.target.id;
    const pcChoice = randomChifoumi();
    gameplay(pcChoice, userChoice);
    console.log(pcChoice, userChoice);
    score();
  });
});
