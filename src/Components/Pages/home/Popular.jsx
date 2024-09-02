import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../../card/MovieCard';
import { POPULAR_MOVIES_URL } from '../../../Api';


function Popular() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`${POPULAR_MOVIES_URL}&primary_release_year=2023`)
      .then(res => {
        console.log(res.data.results);
        setMovies(res.data.results.slice(0, 6));
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="flex justify-start items-center pl-8 pr-8 ">
      <div> 
        <h1 className="text-4xl text-white-800 font-medium font-serif mt-10">POPULAR MOVIES</h1>
        <MovieCard movies={movies} />
      </div>
    </div>
  );
}

export default Popular;