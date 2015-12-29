Header = React.createClass({
	render() {
		return (
			<nav>
    			<div className="nav-wrapper">
      				<a href={FlowHelpers.pathFor('home')} className="brand-logo center hide-on-med-and-down">Movie Keeper</a>
      				<div id="accounts_div">
      				<AccountsUIWrapper />
      				</div>
    			</div>
  			</nav>
		)
	}
})