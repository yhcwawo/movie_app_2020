import React from 'react';
import axiois from 'axios';
import Movie from '../component/Movie';
import "./Home.css";

class Home extends React.Component{

  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async() =>{
    const {data: { data: {movies}}} = await axiois.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    console.log(movies);

    this.setState({movies:movies, isLoading : false});

  }

  componentDidMount(){

    this.getMovies();

  };

  
    render(){

      const { isLoading, movies} = this.state;

      return (


        <section className="container">
          {isLoading ? (
            <div className="loader">
              <span className="loader_text">Loading...</span>
            </div>
        
          )  
          
          
           : (

            <div className="movies">
            {movies.map(movie => (
              <Movie key={movie.id} 
                     id={movie.id} 
                     year={movie.year} 
                     title={movie.title} 
                     summary={movie.summary} 
                     poster={movie.medium_cover_image}
                     genres={movie.genres} 
              />
            ))}

            </div>


          )} 
         </section>

      );
    }


}

      



export default Home;
