Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
 });

MainLayout = React.createClass({
	render() {
		return (
			<div>
				<AccountsUIWrapper />
				<AddMovie />
				<div className="container">
					{this.props.content}
				</div>
			</div>
		)
	}
});