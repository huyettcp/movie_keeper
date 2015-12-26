var { Card, CardTitle, CardActions, FlatButton, CardText } = mui


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
			<Card>
				<h2>{this.data.movie.title}</h2>
				<p>{this.data.movie.plot}</p>
			</Card>
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