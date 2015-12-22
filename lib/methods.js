Meteor.methods({
	addMovie(title) {
		if (! Meteor.userId()) {
			throw new Meteor.Error("not-authorized")
		}

		Movies.insert({
			title: title,
			createdAt: new Date(),
			owner: Meteor.userId(),
			username: Meteor.user().username
		});
	}
})