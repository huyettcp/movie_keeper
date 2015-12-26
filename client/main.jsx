Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
 });



MainLayout = React.createClass({
	render() {
		return (
			<div>

				<AccountsUIWrapper />
				<AddMovie />
					{this.props.content}
			</div>
		)
	}
});