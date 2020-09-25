import React, {Component} from 'react';
import Header from './Components/Header';
import Select from './Components/Select';
import Favorites from './Components/Favorites';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      favMovies: []
    }
    this.selectFn = this.selectFn.bind(this);
  }

  componentDidMount(){
    document.title = 'Watchlist';
    
    axios.get('/api/favMovies')
    .then(res => {
      this.setState({favMovies: res.data})
    })
    .catch(err => console.log(err))
  }

  selectFn(movie){
    axios.post('/api/favMovies', {movie: movie})
    .then(res => {
      this.setState({favMovies: res.data})
    })
    .catch(err => console.log(err))
  }

  rateFn = (id, newRating) => {
    let body = {rating: newRating};

    axios.put(`/api/favMovies/${id}`, body)
    .then(res => {
      this.setState({favMovies: res.data})
    })
    .catch(err => console.log(err))
  }

  removeFn = (id) => {
    axios.delete(`/api/favMovies/${id}`)
    .then(res => {
      this.setState({favMovies: res.data})
    })
    .catch(err => console.log(err))
  }

  render(){
    return (
      <div className='App'>
        <Header />
        <Select
          selectFn={this.selectFn} />
        <Favorites
          favMovies={this.state.favMovies}
          rateFn={this.rateFn}
          removeFn={this.removeFn} />
      </div>
    )
  }
}

export default App;
