MainLayout = React.createClass({
	render() {
		return (
			<div>
				<AddMovie />
				<div className="container">
					{this.props.content}
				</div>
			</div>
		)
	}
});