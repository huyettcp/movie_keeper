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

		Meteor.call("addMovie", title);

		ReactDOM.findDOMNode(this.refs.movieInput).value = ""
	},
	render() {
		return (
			<div className="add-movie-form">
			{ this.data.currentUser ?
				<form className="new-movie" onSubmit={this.handleSubmit} >
					<input
						type="text"
						ref="movieInput"
						placeholder="Add a movie" />
				</form> : ''
			}
			</div>
		)
	}	
});
