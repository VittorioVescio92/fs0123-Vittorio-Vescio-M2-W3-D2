const savedName = document.getElementById("savedName");

window.addEventListener("DOMContentLoaded", () => {
  const writeBtn = document.getElementById("writeBtn");
  writeBtn.addEventListener("click", event => {
    const yourName = document.getElementById("nome");
    localStorage.setItem("name", yourName.value);
    savedName.innerText = yourName.value;
  });
  const deleteBtn = document.getElementById("deleteBtn");
  deleteBtn.addEventListener("click", event => {
    localStorage.removeItem("name");
    savedName.innerText = "";
  });
});

window.onload = () => {
  let nomeMemorizzato = localStorage.getItem("name");
  if (nomeMemorizzato) {
    savedName.innerText = nomeMemorizzato;
  }

  let counterValue = sessionStorage.getItem("time");
  if (!counterValue) {
    counterValue = 0;
    sessionStorage.setItem("time", counterValue);
  }
  const updateCounterInDOM = () => {
    counterValue++;
    let time = document.getElementById("TimeToDeath");
    time.innerText = counterValue + " " + "secondi";
    sessionStorage.setItem("time", counterValue);
  };
  setInterval(updateCounterInDOM, 1000);
};

//   const YearsCalc = () => {
//     let years = document.getElementById("years");
//     let timeInSeconds = counterValue;
//     let timeInYears = timeInSeconds / (60 * 60 * 24 * 365);
//     years.innerText = timeInYears;
//   };
//   setInterval(YearsCalc, 60000);
