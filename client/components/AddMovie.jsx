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

		Meteor.call("addMovie", title, function(error, result) {
			if (result.notAMovie) {
				alert("Not a movie")
			}
		})

		ReactDOM.findDOMNode(this.refs.movieInput).value = ""
	},
	render() {
		return (
			<div className="row">

			{ this.data.currentUser ?
				<form className="new-movie" onSubmit={this.handleSubmit} >
					<input
						className="col s6"
						type="text"
						ref="movieInput"
						placeholder="Add a movie" />
					<input type="submit" name="Add Movie"/>
				</form> : ''
			}
			</div>
  		
		)
	}	
});
