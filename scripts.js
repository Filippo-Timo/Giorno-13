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

  console.log(input);

  const card = document.createElement("div");
  card.innerHTML = `
        <p>${input.value}</p>
        <button onclick="deleteCard(event)">X</button>
    `;
  const container = document.getElementById("lista");
  container.appendChild(card);

  form.reset();
};

form.addEventListener("submit", handleFormSubmit);
