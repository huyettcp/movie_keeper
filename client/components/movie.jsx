
Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired
	},
	render() {
		return (



			  <div className="col s12 m6 l4">
          <div className="card">
            <div className="card-image">
              <img src={this.props.movie.poster}/>
              <span className="card-title">{this.props.movie.title}</span>
            </div>
            <div className="card-content">
              <p>{this.props.movie.plot}</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
		);
	}
})