AddMovie = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
		return {
			currentUser: Meteor.user()
		}
	},

	handleSubmit(event) {
		event.preventDefault();

		var title = ReactDOM.findDOMNode(this.refs.movieInput).value.trim();
		var rating = ReactDOM.findDOMNode(this.refs.ratingInput).value.trim();
		Meteor.call("addMovie", title, rating, function(error, result) {
			if (result.notAMovie) {
				alert("Movie not available on the OMDB API")
			} if (result.notInRange) {
				alert("Please enter a number between 1 and 10")
			}
		})

		ReactDOM.findDOMNode(this.refs.movieInput).value = ""
		ReactDOM.findDOMNode(this.refs.ratingInput).value = ""
	},
	render() {
		return (
			<div className="row">

			{ this.data.currentUser ? 
				<form className="new-movie" onSubmit={this.handleSubmit} >

  			 <div className="input-field col s3 m4 l7">
  			 	<label className="active" htmlFor="movie_title">Movie Title</label>
					<input
						id="movie_title"
						type="text"
						ref="movieInput"
						placeholder="Enter movie title" />
			</div>
			<div className="input-field col s3 m4 l7">		
					<label className="active" htmlFor="rating_title">Rate Movie (1-10)</label>
  					<input
  						id="rating_title"
						label="Title"
						type="text"
						ref="ratingInput"
						placeholder="Rate movie (1-10)" />


					</div>	
					<div className="col s12">	
					<input type="submit" name="Add" className="btn light-blue lighten-2 waves-effect waves-light" placeholder="Add"/>
					</div>
				</form> :

				    <div className="col s12">
          <div className="card light-blue">
            <div className="card-content white-text">
              <span className="card-title">Please login or create an account to begin saving movies to your collection! <br/>Login is in the top left corner.</span>
            </div>
 
          </div>
        </div>



			}
			</div>
  		
		)
	}	
});
