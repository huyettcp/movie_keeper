Meteor.publish("movies", function () {
	return Movies.find();
});

Meteor.publish('singleMovie', function(id) {
  return Movies.find(id);
});
