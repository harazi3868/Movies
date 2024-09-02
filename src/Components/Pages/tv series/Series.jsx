import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import MovieCard from '../../card/MovieCard';
import { SERIES_URL } from '../../../Api';
import SeriesDetail from '../Detail/SeriesDetail';
import SeriesCard from '../../card/SeriesCard';

function Series() {
  const [series, setSeries] = useState([])
  useEffect(() => {
    axios.get(SERIES_URL)
      .then(res => {
        console.log(res.data.results)
        setSeries(res.data.results)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <div className="min-h-screen flex justify-start items-center ">
            {/* style={{ backgroundColor: "#f0f0f0" }} */}
      <div className='flex flex-col justify-start w-full pl-5'> 
        <h1 className="text-4xl text-white-800 font-medium font-serif mt-4">TV SERIES</h1>
        <SeriesCard series={series} />

      </div>
    </div>
  )
}

export default Series