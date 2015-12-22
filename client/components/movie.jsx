Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired
	},
	render() {
		return (
			<a href={FlowHelpers.pathFor('movie', { movieId: this.props.movie._id})}><li>{this.props.movie._id}</li></a>


		);
	}
})