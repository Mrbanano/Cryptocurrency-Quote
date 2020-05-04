const ui = new UI();

// read form
const Form = document.querySelector("#formulario");

Form.addEventListener("submit", (e) => {
  e.preventDefault();
  //select Coin
  const coinSelect = document.querySelector("#moneda");
  const coinSelected = coinSelect.options[coinSelect.selectedIndex].value;
  //select CriptoCoin
  const cryptoCoinSelect = document.querySelector("#criptomoneda");
  const cryptoCoinSelected =
    cryptoCoinSelect.options[cryptoCoinSelect.selectedIndex].value;

  //check if not empty
  if (coinSelected === "" || cryptoCoinSelected === "") {
    ui.ShowMessage(
      "Todos los campos son obligatorios ",
      "alert bg-danger text-center",
      "mensajes"
    );
  } else {
    console.log("ok");
  }
});
