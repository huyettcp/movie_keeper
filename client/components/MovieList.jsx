MovieList = React.createClass({
	mixins: [ReactMeteorData],

	getInitialState() {
		return {
			myMovies: false
		}
	},

	getMeteorData() {
		let query = {};

		if (this.state.myMovies) {
			var myMovieQuery = {viewers: {$in: [Meteor.user()._id]}}
		} else {
			var myMovieQuery = {}
		}
		return {
			movies: Movies.find(myMovieQuery, {sort: {createdAt: -1}}).fetch(),
			currentUser: Meteor.user(),
		}
	},

	toggleMyMovies() {
		this.setState({
      		myMovies: ! this.state.myMovies
    	});

	},


	renderMovies() {
		return this.data.movies.map((movie) => {
			return <Movie key={movie._id} movie={movie} />
		})
	},

	renderAdd() {
		return <AddMovie />
	},

	renderSwitches() {
		return  (

   				<label>
      				All Movies
      			<input type="checkbox"
      				checked={this.state.myMovies}
      				readOnly={true}
          			onClick={this.toggleMyMovies}/>
      			<span className="lever"></span>
      				My Movies
    			</label>

  			)
	
	},

	render() {
		return (
           
           <div className="row"> 

					{this.renderAdd()}
					{ this.data.currentUser ? 
					<div className="row">
					<div className="switch col s12">
						{this.renderSwitches()}
					</div>
					</div>

					: ""}
					{this.renderMovies()}

			</div>
		


		)
	}
})