//using the ws library
var WebSocket = require('ws');
var w = new WebSocket("wss://api2.bitfinex.com:3000/ws");

w.onopen = function(){
  w.send(JSON.stringify({
      "event": "subscribe",
      "channel": "trades",
      "pair": "BTCUSD"
  }));
}

w.onmessage = function(msg) {
    console.log(msg.data);
};
