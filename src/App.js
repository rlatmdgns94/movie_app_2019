import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css"

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
    //moviesData:[]
  };
  getMovies = async() => {
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"); //비구조화 할당
    console.log(movies);
    this.setState({movies, isLoading:false})
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    // console.log(movies.data.data.movies);
    // this.setState({moviesData:movies.data.data.movies, isLoading:false});
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const {isLoading, movies} = this.state //moviesData
    return(
      <section className="container">
        {isLoading ?
        <div className="loader">
          <span className="loader_text">Loading...</span>
        </div> : (
           <div className="movies">
             {
               movies.map(movie =>(
                <Movie id={movie.id}
                year={movie.year} title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres} 
                />
               ))
             }
           </div>
        )}
        {/* {this.state.isLoading ? "Loading..." : this.state.movies.map(movie =>(
           <Movie id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image}/>
        ))} */}
      </section>
    )
  }
}

export default App;
