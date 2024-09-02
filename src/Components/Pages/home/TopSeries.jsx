import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { topRatedSeries} from '../../../Api';
import SeriesCard from '../../card/SeriesCard';


function topSeries(){
  const [series, setSeries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${topRatedSeries}&primary_release_year=2023`)
      .then(res => {
        console.log(res.data.results);
        setSeries(res.data.results.slice(0, 6));
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="flex justify-start items-center pl-8 pr-8 ">
      <div> 
        <h1 className="text-4xl text-white-800 font-medium font-serif">TOP RATED SERIES</h1>
        <SeriesCard series={series} />
      </div>
    </div>
  );
}

export default topSeries;