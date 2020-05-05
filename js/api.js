class Api {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }
  //get All coin
  async getCoinsAPI() {
    const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apiKey}`;
    //fetch  to api
    const getCoins = await fetch(url);
    //formatter in json
    const Coin = await getCoins.json();
    return Coin;
  }

  async getValues(coin, cryptocoin) {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocoin}&tsyms=${coin}&api_key=${this.apiKey}`;
    //consult rest api
    const getConvert = await fetch(url);
    const result = await getConvert.json();
    return {
      result,
    };
  }
}
