


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
		return ([

		<div className="row">
				<img className="col s12 m6 l4"src={this.data.movie.poster}/>
			<div className="section col s12 m6 l8">
				<h3>{this.data.movie.title}</h3>
				<div className="divider"></div>
				<p><b>Plot: </b>{this.data.movie.plot}</p>
				<div className="divider"></div>
			</div>
			<div className="section col s6 m6 l4">
				<ul>
					<li><b>Director:</b> {this.data.movie.director}</li>
					<li><b>Year Released:</b> {this.data.movie.year}</li>
					<li><b>Rated:</b> {this.data.movie.rated}</li>
					<li><b>Runtime:</b> {this.data.movie.runtime}</li>
					<li><b>Genre:</b> {this.data.movie.genre}</li>
					<li><b>Actors:</b> {this.data.movie.actors}</li>
					<li><b>Writers:</b> {this.data.movie.writer}</li>
					<li><b>Awards:</b> {this.data.movie.awards}</li>
				</ul>
				<div className="divider"></div>
			</div>
			<div className="section col s6 m6 l4">
				<ul>
					<li><b>IMDB Rating:</b> {this.data.movie.imdbRating}</li>
					<li><b>IMDB Votes:</b> {this.data.movie.imdbVotes}</li>
					<li><b>Movie Keeper Rating:</b> {this.data.movie.aggregateRating/this.data.movie.viewerCount}</li>
					<li><b>Movie Keeper Votes:</b> {this.data.movie.viewerCount}</li>
				</ul>
				<div className="divider"></div>
			</div>
		</div>
		]);
	},

	render() {
		return (
			<div>
			{this.data.movie? this.getContent() : <p>Loading...</p>}
			</div>

		);
	}
})