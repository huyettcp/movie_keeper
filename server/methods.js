Meteor.methods({
	addMovie(title, rating) {
		if (! Meteor.userId()) {
			throw new Meteor.Error("not-authorized")
		}

		var result = HTTP.get("http://www.omdbapi.com/?t="+title+"&y=&plot=short&r=json")
		var cleanTitle = result.data.Title

		var storedMovie = Movies.findOne({title: cleanTitle})

		var poster = result.data.Poster

		var rating = parseInt(rating)

		if (result.data.Response==="True" && storedMovie===undefined && poster != "N/A" && rating >= 0 && rating <= 10) {



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
			creatorId: Meteor.userId(),
			creatorUsername: Meteor.user().username,
			aggregateRating: rating,
			viewers: [Meteor.userId()],
			viewerCount: 1
		});
		} if (result.data.Response==="False" || poster === "N/A") {
			return {
				notAMovie: true
			}
		} if (rating < 0 || rating > 10) {
			return {
				notInRange: true
			}
		} else {
			Movies.update(storedMovie._id, {
				$addToSet: {
					viewers: Meteor.userId()

				},
				$inc: { 
					viewerCount: 1,
					aggregateRating: parseInt(rating)

				}
			})
		}

		},
	reviewMovie(movieId, rating) {
		var storedMovie = Movies.findOne({_id: movieId})
		var rating = parseInt(rating)
		if (rating > 0 && rating < 10) {
		Movies.update(storedMovie._id, {
			$addToSet: {
				viewers: Meteor.userId()
			},
			$inc: {
				viewerCount: 1,
				aggregateRating: rating

			}
		})
	} else {
		return {
			notInRange: true
		}
	}

	}

})