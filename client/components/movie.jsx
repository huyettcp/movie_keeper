
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
        return <a onClick={this.reviewToggle} href="">Review</a>
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

		<div className="col s12 m4 l3">
    { this.state.reviewForm ? 
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
             <div className="col s12">

            <input
              id="rating_title"
              className="col s12"
              type="text"
              ref="rating"
              placeholder="Rate movie (1-10)" />
            </div>      
            <div className="card-action">
            <input type="submit" name="Add" className="btn waves-effect waves-light" placeholder="Add"/>

            </div>
              </form>
          </div>} 
        </div>
  
		);
	}
})