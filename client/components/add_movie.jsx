AddMovie = React.createClass({
	handleSubmit(event) {
		event.preventDefault();

		var title = ReactDOM.findDOMNode(this.refs.movieInput).value.trim();

		Movies.insert({
			title: title,
			createdAt: new Date()
		});

		ReactDOM.findDOMNode(this.refs.movieInput).value = ""
	},
	render() {
		return (
			<div className="add-movie-form">
				<form className="new-movie" onSubmit={this.handleSubmit} >
					<input
						type="text"
						ref="movieInput"
						placeholder="Add a movie" />
				</form>
			</div>
		)
	}	
});
