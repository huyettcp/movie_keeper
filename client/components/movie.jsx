Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired
	},
	render() {
		return (
			<li>{this.props.movie.title}</li>
		);
	}
})