import React from 'react';
import PropTypes from "prop-types";
import "./Movie.css";
import {Link} from "react-router-dom";

function Movies({id, year, title, summary, poster, genres}){
    return(

        <Link to={{
                pathname: '/movie/'+id,
                state: {
                    year: year,
                    title : title,
                    summary : summary,
                    poster : poster,
                    genres : genres,
                }
        }}>
            <div className="movie">
                <img src={poster} alt={title} title={title}></img>

                <div className="movie_data">
                    <h3 className="movie_title">{title}</h3>
                    <h5 className="moive_year">{year}</h5>
                    <ul className="movie__genres">{genres.map((genre, index) => <li key={index} className="genres_genre">{genre}</li>) }</ul>  
                    <p className="movie_summary">{summary.slice(0,180)}...</p>

                </div>


            </div>
        </Link>
    );


}

Movies.propTypes = {
    id: PropTypes.number.isRequired, 
    year: PropTypes.number.isRequired, 
    poster: PropTypes.string.isRequired, 
    summary: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    genres: PropTypes.arrayOf(PropTypes.string).isRequired, 
    
}

export default Movies;