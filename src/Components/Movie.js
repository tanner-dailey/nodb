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
            <div onClick={this.handleFav}>
                <h3>{this.props.movie.title}</h3>
                <h5>{this.props.movie.rating}/10</h5>
            </div>
        )
    }
}

export default Movie;