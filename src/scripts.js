// RICCARDO REALI - EPICODE - 2025

const createTabellone = () => {
  const tabellone = document.getElementById("tabellone");

  for (let i = 1; i <= 90; i++) {
    const cella = document.createElement("div");
    cella.className = "cella-tabellone";
    cella.innerText = i;
    cella.id = i;
    tabellone.appendChild(cella);
  }
};

createTabellone();

const startPlay = document.getElementById("giocaBtn");

startPlay.onclick = () => {
  const selectedNum = Math.floor(Math.random() * 90 + 1);
  const celle = document.querySelectorAll(".cella-tabellone");

  for (let i = 0; i < celle.length; i++) {
    const cella = celle[i];
    if (selectedNum === parseInt(cella.id)) {
      cella.innerText = i + "❌";
      break;
    }
  }
};

const refreshPage = () => {
  const conferma = confirm("Sicuro di voler ricominciare?");
  if (conferma) {
    location.reload(); // Ricomincia solo se l'utente ha cliccato "OK"
  }
};
const reset = document.getElementById("resetBtn");
reset.onclick = refreshPage;
