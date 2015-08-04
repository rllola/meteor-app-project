if (!Price.find().count()) {
  Price.insert({
    _id: '1',
    price: '0'
  });

  var btms = [
    {
      name: 'Btm Genève',
      address: {
        line1: 'Rue de Zurich 6',
        zipCode: '1201',
        city: 'Genève',
        country: 'Switzerland',
          location: {
            type: 'Point',
            coordinates: [46.211403, 6.148588]
        }
      }
    },
    {
      name: 'Btm Lausanne',
      address: {
        line1: 'Rue de la Grotte 3',
        zipCode: '1003',
        city: 'Lausanne',
        country: 'Switzerland',
          location: {
            type: 'Point',
            coordinates: [46.518702, 6.634079]
        }
      }
    },
    {
      name: 'Btm Neuchâtel',
      address: {
        line1: 'Rue des Amendiers 5',
        zipCode: '2000',
        city: 'Neuchâtel',
        country: 'Switzerland',
          location: {
            type: 'Point',
            coordinates: [46.983841, 6.902818]
        }
      }
    }
  ];

  _.each(btms, function(btm) {
    Btms.insert(btm);
  });

  Btms._ensureIndex({'address.location.coordinates':'2dsphere'});
}
