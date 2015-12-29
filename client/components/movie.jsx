
Movie = React.createClass({

	propTypes: {
		movie: React.PropTypes.object.isRequired
	},

  getInitialState() {
    return {
      reviewForm: true
    }
  },

  reviewMovie() {
    if (Meteor.user() != null) {
      var viewerArray = this.props.movie.viewers
      var viewer = Meteor.user()._id
      if (_.contains(viewerArray, viewer) == false) {
        return <a className="light-blue-text text-lighten-2" onClick={this.reviewToggle} href="">Review</a>
      }
    }
  },

  reviewToggle() {
    this.setState({
      reviewForm: false

    })
  },

  handleReview(event) {
    event.preventDefault();
    var movieId = this.props.movie._id
    var rating = ReactDOM.findDOMNode(this.refs.rating).value.trim();


    Meteor.call("reviewMovie", movieId, rating, function(error, result) {

    })
    this.setState({
      reviewForm: true
    })
  },


  render() {
		return (

		<div className="col s12 m6 l4">
    { this.state.reviewForm ? 
          <div className="card">
            <div max-height="100" className="card-image">
              <img height="445" src={this.props.movie.poster}/>
              <span className="card-title flow-text">{this.props.movie.title}</span>
            </div>
            <div className="card-content">
              <p className="card-text">Year Released: {this.props.movie.year}</p>
              <p className="card-text">IMDB Rating: {this.props.movie.imdbRating}</p>
              <p className="card-text">Movie Keeper Rating: {this.props.movie.aggregateRating/this.props.movie.viewerCount}</p>
            </div>
            <div className="card-action">
              <a className="light-blue-text text-lighten-2"href={FlowHelpers.pathFor('movie', { movieId: this.props.movie._id})}>More info</a>
              {this.reviewMovie()}
            </div>
          </div>
         : 

        <div className="card">
            <div className="card-image">
              <img src={this.props.movie.poster}/>
              <span className="card-title">{this.props.movie.title}</span>
            </div>

            <form onSubmit={this.handleReview}>
             <div className="col s12 input-field">

            <input
              id="rating_title"
              className="col s12"
              type="text"
              ref="rating"
              placeholder="Rate movie (1-10)" />
            </div>      
            <div className="card-action">
            <input type="submit" name="Add" className="btn light-blue lighten-2"/>

            </div>
              </form>
          </div>} 
        </div>
  
		);
	}
})