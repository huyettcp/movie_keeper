
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
					<input
						className="col s12"
						label="Title"
						type="text"
						ref="movieInput"
						placeholder="Enter movie title" />
  					<input
						className="col s12"
						label="Title"
						type="text"
						ref="ratingInput"
						placeholder="Rate movie (1-10)" />

					<input type="submit" name="Add" className="btn waves-effect waves-light" placeholder="Add"/>

				</form> : ''
			}
			</div>
  		
		)
	}	
});
