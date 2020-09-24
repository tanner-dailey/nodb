const express = require('express');
const movCtrl = require('./controllers/movCtrl');
const favCtrl = require('./controllers/favCtrl');

const app = express();

app.use(express.json());

app.get('/api/movies', movCtrl.getMovies);

app.get('/api/favMovies', favCtrl.getFavMovies);
app.post('/api/favMovies', favCtrl.addFavorite);
app.put('/api/favMovies/:id', favCtrl.changeRating);
app.delete('/api/favMovies/:id', favCtrl.removeFav);

app.listen(4444, () => console.log('Server is running on port 4444'));