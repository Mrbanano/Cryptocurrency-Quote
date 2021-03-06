class UI {
  constructor() {
    this.init();
  }
  init() {
    this.builOptions();
  }
  //insert fields for options
  builOptions() {
    api.getCoinsAPI().then((coins) => {
      //get selector
      const select = document.querySelector("#criptomoneda");

      for (const [key, value] of Object.entries(coins.Data)) {
        // add Symbol and name in options
        const option = document.createElement("option");
        option.value = value.Symbol;
        option.appendChild(document.createTextNode(value.CoinName));
        select.appendChild(option);
      }
    });
  }
  //show messages
  ShowMessage(message, classes, container) {
    const div = document.createElement("div");
    div.className = classes;
    div.appendChild(document.createTextNode(message));
    //select content
    const divMessage = document.querySelector(`.${container}`);
    divMessage.appendChild(div);

    setTimeout(() => {
      document.querySelector(`.${container} div`).remove();
    }, 3000);
  }
}
