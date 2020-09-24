const favMovies = [];
let id = 1;

module.exports = {
    getFavMovies: (req, res) => {
        res.status(200).send(favMovies);
    },
    addFavorite: (req, res) => {
        const {movie} = req.body;

        movie.id = id;
        id++;

        favMovies.push(movie);
        res.status(200).send(favMovies);
    },
    changeRating: (req, res) => {
        const {id} = req.params;
        const {rating} = req.body;

        const movie = favMovies.find(element => element.id === +id);
        movie.rating = rating;
        res.status(200).send(favMovies);
    },
    removeFav: (req, res) => {
        const {id} = req.params;

        const index = favMovies.findIndex(element => element.id === +id);
        favMovies.splice(index, 1);
        res.status(200).send(favMovies);
    }
}