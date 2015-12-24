Meteor.methods({
	addMovie(title) {
		if (! Meteor.userId()) {
			throw new Meteor.Error("not-authorized")
		}

		var result = HTTP.get("http://www.omdbapi.com/?t="+title+"&y=&plot=short&r=json")

		if (result.data.Response==="True") {
			console.log(result.data.Response)

		var cleanTitle = result.data.Title
		var year = result.data.Year
		var rated = result.data.Rated
		var released = result.data.Released
		var runtime = result.data.Runtime
		var genre = result.data.Genre
		var director = result.data.Director
		var writer = result.data.Writer
		var actors = result.data.Actors
		var plot = result.data.Plot
		var language = result.data.Language
		var country = result.data.Country
		var awards = result.data.Awards
		var poster = result.data.Poster
		var metascore = result.data.Metascore
		var imdbRating = result.data.imdbRating
		var imdbVotes = result.data.imdbVotes
		var imdbId = result.data.imdbID

		Movies.insert({
			title: cleanTitle,
			year: year,
			rated: rated,
			released: released,
			runtime: runtime,
			genre: genre,
			director: director,
			writer: writer,
			actors: actors,
			plot: plot,
			language: language,
			country: country,
			awards: awards,
			poster: poster,
			metascore: metascore,
			imdbRating: imdbRating,
			imdbVotes: imdbVotes,
			imdbId: imdbId,
			createdAt: new Date(),
			owner: Meteor.userId(),
			username: Meteor.user().username
		});
		}

	}
})