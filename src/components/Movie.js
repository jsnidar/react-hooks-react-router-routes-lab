import React, { useState } from 'react';
import ListItem from './ListItem';


const Movie = ({movie}) => {
        
        const genres = movie.genres.map((genre) => <ListItem key={genre} li={genre} />)
    return (
        <div>
            <h3>{movie.title}</h3>
            <h4>Time: {movie.time}</h4>
            <h4>Genres:</h4>
            <ul>
                {genres}
            </ul>
        </div>
    )
}

export default Movie;