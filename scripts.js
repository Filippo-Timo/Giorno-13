// const form = document.getElementById("main-form");
// const handleFormSubmit = function (e) {
//   form.addEventListener("submit", function (e) {
//     e.preventDefault();
//   });

//   const input = document.getElementById("main-input");

//   const valoreInput = input.value;

//   const lista = document.getElementById("lista");

//   const card = document.createElement("div");

//   card.innerHTML = `
//         <p>${valoreInput}</p>
//         <button onclick="deleteCard(event)">ELIMINA</button>
//     `;

//   const container = document.getElementById("lista");
//   container.appendChild(card);
// };

const form = document.getElementById("main-form");

const deleteCard = function (e) {
  console.log("ELIMINO CARD", e);

  e.target.parentElement.remove();
};

const handleFormSubmit = function (e) {
  e.preventDefault();
  console.log("ORA POSSIAMO RECUPERARE I DATI");

  const input = document.getElementById("main-input");

  const valoreInput = input.value;

  // 3) confermiamo intanto tutto con un console.log
  console.log(input);

  const card = document.createElement("div");
  card.innerHTML = `
        <p>${input}</p>
        <button onclick="deleteCard(event)">X</button>
    `;
  const container = document.getElementById("lista");
  container.appendChild(card);

  form.reset();
};

form.addEventListener("submit", handleFormSubmit);
