import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MovieCard from '../../card/MovieCard';
import { topRated } from '../../../Api';

function TopRated() {
    //use axios to get data from api
    const [movies, setMovies] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(topRated)
            .then(res => {
                console.log(res.data.results)
                setMovies(res.data.results.slice(10,16))
            })
            .catch(err => console.log(err))
    }, [])

  return (
    <div className="flex justify-start items-center pl-8 pr-8">
    <div> 
      <h1 className="text-4xl text-white-800 font-medium font-serif mt-4">TOP RATED MOVIES</h1>
            <MovieCard
                movies={movies} /> 
            </div>
    </div>
  )
}

export default TopRated;