import React from "react";
import Movie from "../components/Movie";

class Movies extends React.Component {
    
    state = {
        movies: [
            {id: '1',name: 'John Wick 1', genre: 'Action', year: 2019},
            {id: '2',name: 'John Wick 2', genre: 'Action', year: 2020},
            {id: '3',name: 'John Wick 3', genre: 'Action', year: 2021},
            {id: '4',name: 'John Wick 4', genre: 'Action', year: 2022},
            {id: '5',name: 'John Wick 5', genre: 'Action', year: 2023}

        ]
    }
    
    render() {
        return (
            <div className="movies">
                {this.state.movies.map((movie) => {
                    return <Movie key={movie.id} name={movie.name} genre={movie.genre} year={movie.year} />
                })}

            </div> 
        );
    }
}

export default Movies;