import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import MovieCard from './card/MovieCard';
import { HORROR_MOVIES_URL } from '../Api';

function Horror() {
  const [series, setSeries] = useState([])
  useEffect(() => {
    axios.get(`${HORROR_MOVIES_URL}&primary_release_year=2023`)
      .then(res => {
        console.log(res.data.results)
        setSeries(res.data.results)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <div className="min-h-screen flex justify-start items-center pl-8 pr-8">
      <div> 
        <h1 className="text-4xl text-white-800 font-medium font-serif mt-4">HORROR</h1>
        <MovieCard movies={series} />

      </div>
    </div>
  )
}

export default Horror;