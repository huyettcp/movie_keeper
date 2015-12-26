var { Card, CardTitle, CardActions, FlatButton, CardText } = mui

Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired
	},
	render() {
		return (
			<Card>
			<a href={FlowHelpers.pathFor('movie', { movieId: this.props.movie._id})}><li>{this.props.movie.title}</li></a>
			</Card>

		);
	}
})