// server/file.js
var url = 'https://websocket.btcchina.com/';

// define the websocket connection using the `io` global variable
var socket = io(url);

socket.emit('subscribe', 'marketdata_cnybtc');

socket.on('connect', Meteor.bindEnvironment(function(){
  console.log('Connected to ' + url);

  socket.on('ticker', Meteor.bindEnvironment(function (data) {
      var newBtmPrice = data.ticker.sell + data.ticker.sell*5/100;
      var lastBtmPrice = Price.findOne();
      if (lastBtmPrice.price != newBtmPrice.toFixed(2)) {
        console.log('Price Changed !');
        Price.update({
          _id: lastBtmPrice._id
        },
        {
          $set: {price: newBtmPrice.toFixed(2)}
        });
      }
  }));
}));
