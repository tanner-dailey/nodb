let movies = [
    {id: 1, title: 'Tenet', rating: 9},
    {id: 2, title: 'New Mutants', rating: 7},
    {id: 3, title: 'Hunger Games', rating: 8},
    {id: 4, title: 'Sea of Monsters', rating: 2},
    {id: 5, title: 'Scoob', rating: 5},
    {id: 6, title: "Sorcerer's Stone", rating: 9},
    {id: 7, title: 'Black Panther', rating: 10},
    {id: 8, title: 'Shrek', rating: 8},
    {id: 9, title: '1917', rating: 7},
    {id: 10, title: 'Inception', rating: 10}
];

module.exports = {
    getMovies: (req, res) => {
        res.status(200).send(movies);
    }
}