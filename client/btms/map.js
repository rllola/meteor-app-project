Template.map.helpers({
  btms: function () {
    return Btms.findOne();
  }
});

Template.map.onRendered(function () {
  navigator.geolocation.getCurrentPosition(function(position) {
    Session.set('currentPosition', [position.coords.latitude, position.coords.longitude]);
    console.log(Session.get('currentPosition'));
  });
});
