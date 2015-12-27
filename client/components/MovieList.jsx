MovieList = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
		return {
			movies: Movies.find({}, {sort: {createdAt: -1}}).fetch(),
			currentUser: Meteor.user(),
		}
	},

	renderMovies() {
		return this.data.movies.map((movie) => {
			return <Movie key={movie._id} movie={movie} />
		})
	},

	renderAdd() {
		return <AddMovie />
	},

	render() {
		return (

			<div className="row">
					{this.renderAdd()}
					{this.renderMovies()}

			</div>
		


		)
	}
})