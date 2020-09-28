import React from 'react';
import FavMov from './FavMov';

const Favorites = props => {
    const mappedMovies = props.favMovies.map((movie, i) => (
        <FavMov
            key={i}
            movie={movie}
            rateFn={props.rateFn}
            removeFn={props.removeFn} />
    ))

    return (
        <div>
            <h1>Top 5 Favorites</h1>
            <div className='fav-flex'>
                {mappedMovies}
            </div>
        </div>
    )
}

export default Favorites;