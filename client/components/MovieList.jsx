MovieList = React.createClass({
	mixins: [ReactMeteorData],
	
	getMeteorData() {
		return {
			movies: Movies.find({}, {sort: {title: 1}}).fetch(),
			currentUser: Meteor.user()
		}
	},

	renderMovies() {
		return this.data.movies.map((movie) => {
			return <Movie key={movie._id} movie={movie} />
		})
	},

	render() {
		return (
			<div className="movie-list">
				<ul>
					{this.renderMovies()}
				</ul>
			</div>
		)
	}
})