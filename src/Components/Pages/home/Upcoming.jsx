import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MovieCard from '../../card/MovieCard';
import { SERIES_URL} from '../../../Api';
import SeriesCard from '../../card/SeriesCard';


function Ucoming(){
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${SERIES_URL}&primary_release_year=2023`)
      .then(res => {
        console.log(res.data.results);
        setMovies(res.data.results.slice(0, 6));
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="flex justify-start items-center pl-8 pr-8">
      <div> 
        <h1 className="text-4xl text-white-800 font-medium font-serif">POPULAR SERIES</h1>
        <SeriesCard series={movies} />
      </div>
    </div>
  );
}

export default Ucoming;