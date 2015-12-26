


MoviePage = React.createClass({
	mixins: [ReactMeteorData],
	
	getMeteorData() {
		var data = {}
		var movieId = this.props.movieId
		var handle = Meteor.subscribe('singleMovie', movieId);
		if(handle.ready()) {
			data.movie = Movies.findOne({_id: movieId})
		}

		return data
	},

	getContent() {
		return (

				<h2>{this.data.movie.title}</h2>


		);
	},

	render() {
		return (
			<div>
			{this.data.movie? this.getContent() : <p>Loading...</p>}
			</div>

		);
	}
})