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
  //insert
  ShowResult(result, coin, cryptocoin) {
    //if exist a other result clear

    const lastResult = document.querySelector("#resultado div ");

    lastResult ? lastResult.remove() : "";

    const dataCoin = result[cryptocoin][coin];
    //format price
    let price = dataCoin.PRICE.toFixed(2);
    let porcent = dataCoin.CHANGEDAY.toFixed(2);
    let lastupdate = new Date(dataCoin.LASTUPDATE * 1000).toLocaleDateString(
      "es-Mx"
    );

    //buil template
    let templateHtml = `
      <div class="card bg-warning">
         <div class="card-body text-light">
              <h2 class="card-title"></h2>
              <p>el precio de ${dataCoin.FROMSYMBOL} a moneda ${dataCoin.TOSYMBOL} es de $ ${price}</P>
              <p>variacion ultimo dia ${porcent}%</p>
              <p> ultima actualizacion  ${lastupdate}</p>
              
         </div>
      </div>
    `;
    this.showSpinner("block");

    setTimeout(() => {
      this.showSpinner("none");
      document.querySelector("#resultado").innerHTML = templateHtml;
    }, 3000);
  }

  //showSpinner
  showSpinner(mode) {
    const spinner = document.querySelector(".contenido-spinner");
    spinner.style.display = mode;
  }
}
