import React, {Component} from 'react';
import axios from 'axios';
import Movie from './Movie';

class Select extends Component {
    constructor(){
        super();
        this.state = {
            movies: []
        }
    }

    componentDidMount(){
        this.getMovies();
    }

    getMovies = () => {
        axios.get('/api/movies')
        .then(res => {
            this.setState({movies: res.data})
        })
        .catch(err => console.log(err))
    }

    render(){
        const mappedMovies = this.state.movies.map((movie, i) => (
            <Movie
                key={i}
                movie={movie}
                selectFn={this.props.selectFn} />
        ))
        return (
            <div className='mov-flex'>
                {mappedMovies}
            </div>
        )
    }
}

export default Select;