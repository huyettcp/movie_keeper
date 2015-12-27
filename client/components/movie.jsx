
Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired
	},
	render() {
		return (
		
		<div className="col s6 m4 l3">
          <div className="card">
            <div className="card-image">
              <img src={this.props.movie.poster}/>
              <span className="card-title">{this.props.movie.title}</span>
            </div>
            <div className="card-content">
              <p>Year Released: {this.props.movie.year}</p>
              <p>IMDB Rating: {this.props.movie.imdbRating}</p>
              <p>Community Rating: {this.props.movie.aggregateRating/this.props.movie.viewerCount}</p>
            </div>
            <div className="card-action">
              <a href={FlowHelpers.pathFor('movie', { movieId: this.props.movie._id})}>More info</a>
  
            </div>
          </div>
        </div>
		);
	}
})