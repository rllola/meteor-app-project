Template.price.helpers({
    price: function() {
      var price = Price.findOne();
      console.log(price);
      return price;
    }
});
