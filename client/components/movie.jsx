Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired
	},
	render() {
		return (
			<a href=""><li>{this.props.movie.title}</li></a>
		);
	}
})