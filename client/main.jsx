Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
 });


MainLayout = React.createClass({
	render() {
		return (
			<div>
				<Header />

				<div className="container">
				<div className="row">


				</div>
					{this.props.content}
				</div>
			</div>
		)
	}
});