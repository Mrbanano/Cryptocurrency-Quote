const api = new Api(
  "03a545b064d459319c4f388ebbacde6a6a5d6a5b7ea849d91fdd9cd6ac7d5ec6"
);
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
    api.getValues(coinSelected, cryptoCoinSelected).then((data) => {
      ui.ShowResult(data.result.RAW, coinSelected, cryptoCoinSelected);
    });
  }
});
