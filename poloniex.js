//using the ws library
var WebSocket = require('ws');
var w = new WebSocket("wss://api.poloniex.com");

w.onopen = function(){
  w.send(JSON.stringify({
      "event": "subscribe",
      "channel": "ticker",
      "currencyPair": "BTC_BBR"
  }));
}

w.onmessage = function(msg) {
    console.log(msg.data);
};
