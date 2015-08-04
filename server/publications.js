Meteor.publish('price', function () {
  return Price.find({_id: '1'});
});

Meteor.publish('btms', function (position) {
  var btms;
  if (position === null) {
    btms = Btms.find();
  } else {
    btms = Btms.find({
      'address.location.coordinates': {
        $nearSphere: {
          $geometry: {
            type: 'Point',
            coordinates: position
          },
          $maxDistance: 5000
        }
      }
    });
  }
  return btms;
});

