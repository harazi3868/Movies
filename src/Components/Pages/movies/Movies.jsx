import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MovieCard from '../../card/MovieCard';
import { MoviesAll} from '../../../Api';
import Season from '../../Season';
import Romantic from '../../Romantic';
import Cartoon from '../../Cartoons';
import Horror from '../../Horror';
import Comdey from '../../Comedy'


function Movies() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${MoviesAll}&primary_release_year=2023`)
      .then(res => {
        console.log(res.data.results);
        setMovies(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="min-h-screen flex justify-start items-center pl-8 pr-8">
      {/* style={{ backgroundColor: "#f0f0f0" }} */}
      <div> 
        <h1 className="text-4xl text-white-800 font-medium font-serif mt-4">MOVIES</h1>
        <MovieCard movies={movies} />
        <Season />
        <Romantic />
        <Cartoon />
        <Comdey />
        <Horror /> 
      </div>
    </div>
  );
}

export default Movies;