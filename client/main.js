Meteor.subscribe('price');

Tracker.autorun(function () {
  Meteor.subscribe('btms', Session.get('currentPosition'));
});
