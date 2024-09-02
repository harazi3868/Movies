import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../../../Api';
import MovieCard from '../../card/MovieCard';
import SeriesCard from '../../card/SeriesCard';

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("movie");

  const searchMovie = () => {
    const endpoint = `https://api.themoviedb.org/3/search/${search}?api_key=${api}&language=en-US&page=1&query=${inputValue}&include_adult=false`;

    axios.get(endpoint)
      .then((res) => {
        setSearchResult(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    searchMovie();
  };     

  return (
    <div className="flex flex-col justify-center items-center w-full h-full " >
      {/* style={{ backgroundColor: "#f0f0f0" }}  */}
      <div className='flex gap-3'>
        <button onClick={() => setSearch("movie")} className={`bg-gray-800 text-white px-4 py-2 rounded-l-md ${search === "movie" ? "bg-red-600" : ""}`}>Movies</button>
        <button onClick={() => setSearch("tv")} className={`bg-gray-800 text-white px-4 py-2 ${search === "tv" ? "bg-red-600" : ""}`}>Shows</button>
        <button onClick={() => setSearch("person")} className={`bg-gray-800 text-white px-4 py-2 rounded-r-md ${search === "person" ? "bg-red-600" : ""}`}>People</button>
      </div>
      <div className="w-full h-1 bg-gray-800 mt-3"></div>
      <div className="flex justify-center items-center w-full h-20 gap-4">
        <input type="text" placeholder="Search" className="w-1/2 h-10 bg-gray-800 text-white px-4 py-6 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" value={inputValue} onChange={handleInputChange} />
      </div>
      <div className="w-full h-1 bg-gray-800 mt-3 "></div>
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <h1 className="text-white text-2xl font-bold mt-4">Search Results</h1>
        <div className="flex flex-wrap justify-center items-center w-full h-full gap-4 mt-4">
        {searchResult?.map((item, index) => (
            <div key={index} className="flex-col justify-center items-center w-64 h-96 bg-gray-800 first-letterfirst-line hover:scale-125 hover:z-10 hover:shadow-xl inline-block transform transition-transform duration-200 relative rounded-lg overflow-hidden m-0.19 cursor-pointer min-w-0 h-300 z-0 border border-gray-400">
               {item.poster_path || item.profile_path ? (
                <img src={`https://image.tmdb.org/t/p/original/${item.poster_path || item.profile_path}`} alt="" className="w-full h-3/4 rounded-t-md" />
              ) : (
                <div className="w-full h-3/4 rounded-t-md"></div>
              )}
              <div className="opacity-0 md:hover:opacity-100 absolute bottom-0 top-0 px-4 pb-4 h-290 flex flex-col w-85 justify-end bg-gradient-to-b from-transparent to-black transition-opacity duration-300">
                <h1 className="text-white  font-bold text-lg mb-2">{item.title || item.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;