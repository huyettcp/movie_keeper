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
				<AccountsUIWrapper />
				</div>
				<AddMovie />
					{this.props.content}
				</div>
			</div>
		)
	}
});