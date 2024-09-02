import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MovieCard from './card/MovieCard';
import { Season_MOVIES_URL } from '../Api';


function Season() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(Season_MOVIES_URL)
      .then(res => {
        console.log(res.data.results);
        setMovies(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="min-h-screen flex justify-start items-center pl-8 pr-8">
      <div> 
        <h1 className="text-4xl text-white-800 font-medium font-serif mt-4">TRANDING</h1>
        <MovieCard movies={movies} />
      </div>
    </div>
  );
}

export default Season;