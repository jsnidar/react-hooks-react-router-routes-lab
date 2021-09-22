import React from 'react';
import ListItem from './ListItem';

const Actor = ({actor}) => {
    
    const movies = actor.movies.map(movie => <ListItem key={movie} li={movie} />)

    return (
        <div>
            <h3>{actor.name}</h3>
            <h4>Movies: </h4>
            <ul> 
                {movies}
            </ul>
        </div>
    )
}

export default Actor;