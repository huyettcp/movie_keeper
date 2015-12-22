FlowRouter.route('/', {
	action() {
		ReactLayout.render(MainLayout, { content: <MovieList /> });
	}
});

FlowRouter.route('/movie/:movieId', {
	name: 'movie',
	action(params) {
		console.log(params.movieId)
	}
})