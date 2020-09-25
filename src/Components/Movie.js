import React, {Component, component} from 'react';

class Movie extends Component {
    handleFav = () => {
        const {movie} = this.props;
        let newFav = {
            title: movie.title,
            rating: movie.rating
        }

        this.props.selectFn(newFav);
    }

    render(){
        return(
            <div className='ind-mov' onClick={this.handleFav}>
                <h2>{this.props.movie.title}</h2>
                <h3>{this.props.movie.rating}/10</h3>
            </div>
        )
    }
}

export default Movie;