// import the Media class:
const Media = require('./Media.js')
// create your Movie class:
class Movie extends Media {
    constructor(title, genre, year, director, duration, rating) {
        super(title, genre, year)
        this.director = director
        this.duration = duration
        this.rating = rating
    }

    summary() {
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`
    }

    static longestMovie(arr) {
        let longest = null
        
        arr.forEach(movie => {
            if (!longest || movie.duration > longest.duration) {
                longest = movie
            }
        })

        return longest
    }
}
// don't change below
module.exports = Movie;