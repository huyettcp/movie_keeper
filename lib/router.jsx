FlowRouter.route('/', {
	name: 'home',
	subscriptions: function() {
		this.register('movies', Meteor.subscribe('movies'))
	},
	action() {
		ReactLayout.render(MainLayout, { content: <MovieList /> });
	}
});

FlowRouter.route('/movie/:movieId', {
	name: 'movie',
	subscriptions: function(params) {
		this.register('singleMovie', Meteor.subscribe("singleMovie", params.movieId))
	},
	action(params) {
		ReactLayout.render(MainLayout, { content: <MovieList /> });
	}
})