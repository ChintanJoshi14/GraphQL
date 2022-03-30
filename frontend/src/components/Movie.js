import React from 'react';
import './Movie.css';

function Movie(props) {
    return(
        <div className='card'>
            <div className='container'>
                <div>{props.name}</div>
                <div>{props.genre} - {props.year}</div>
                </div>

        </div>
    );
}

export default Movie;