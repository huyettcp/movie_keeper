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
	action(params) {
		ReactLayout.render(MainLayout, { content: <MoviePage {...params} /> });
	}
});