
	 $(document).ready(function() {
    $('select').material_select();
  });


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
		console.log(rating)
		Meteor.call("addMovie", title, rating, function(error, result) {
			if (result.notAMovie) {
				alert("Not a movie")
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

  			 <div className="input-field col s7">
  			 	<label className="active" for="movie_title">Movie Title</label>
					<input
						id="movie_title"
						className="col s12"
						type="text"
						ref="movieInput"
						placeholder="Enter movie title" />
			</div>
			<div className="input-field col s7">		
					<label className="active" for="rating_title">Rate Movie (1-10)</label>
  					<input
  						id="rating_title"
						className="col s12"
						label="Title"
						type="text"
						ref="ratingInput"
						placeholder="Rate movie (1-10)" />

					<input type="submit" name="Add" className="btn waves-effect waves-light" placeholder="Add"/>
					</div>	
				</form> : ''
			}
			</div>
  		
		)
	}	
});
