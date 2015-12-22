MoviePage = React.createClass({
	mixins: [ReactMeteorData],
	
	getMeteorData() {
		console.log(Movies.find({}).count())
		return {
			movies: Movies.find({}).fetch(),
			currentUser: Meteor.user()
		}
	},


	render() {
		return (
			<ul>
			{this.data.movies.map(function(movie) {
				return ([
					<li>{movie.title}</li>,
					<li>{movie.plot}</li>,
					<li>{movie.year}</li>
				])
			})}

			</ul>


		);
	}
})