const savedName = document.getElementById("savedName");

window.addEventListener("DOMContentLoaded", () => {
  const writeBtn = document.getElementById("writeBtn");
  writeBtn.addEventListener("click", event => {
    event.preventDefault();
    const yourName = document.getElementById("nome");
    localStorage.setItem("name", yourName.value);
    savedName.innerText = yourName.value;
  });
  const deleteBtn = document.getElementById("deleteBtn");
  deleteBtn.addEventListener("click", event => {
    event.preventDefault();
    localStorage.removeItem("name");
    savedName.innerText = "";
  });
});

window.onload = () => {
  let counterValue = sessionStorage.getItem("time");
  if (!counterValue) {
    counterValue = 0;
    sessionStorage.setItem("time", counterValue);
  }

  let nomeMemorizzato = localStorage.getItem("name");
  if (nomeMemorizzato) {
    savedName.innerText = nomeMemorizzato;
  }

  const updateCounterInDOM = () => {
    let time = document.getElementById("TimeToDeath");
    time.innerText = counterValue;
    sessionStorage.setItem("time", counterValue);
    counterValue++;
  };
  updateCounterInDOM();
  setInterval(updateCounterInDOM, 1000);
};
