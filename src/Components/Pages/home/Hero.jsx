import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TopRated from './TopRated'
import Popular from './Popular';
import { POPULAR_MOVIES_URL } from '../../../Api';
import TopSeries from './TopSeries'
import Upcoming from './Upcoming';

const Hero = () => {

    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        axios.get(POPULAR_MOVIES_URL) 
          .then(res => {
            console.log(res.data.results)
            setPopularMovies(res.data.results)
          })
          .catch(err => console.log(err))
      }, [])

      return (
        <>
            <div className="poster" > 
            {/* style={{ backgroundColor: "#f0f0f0" }} */}
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {popularMovies.map((movie,index) => (
                        <Link
                            to={`/movieDetail/${movie.id}`}
                            className="text-white no-underline"
                            style={{ textDecoration: "none", color: "white" }}
                            key={index}
                        >
                            
                            <div key={index} className="posterImage relative md:h-[630px]">
                                <img  className="mx-auto block w-full"
                                    src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}
                                    alt="Movie Poster"
                                />
                            </div>
                            <div className="hidden md:absolute bottom-0 w-full h-70 md:flex flex-col justify-end items-start bg-gradient-to-b from-transparent to-black p-20 opacity-100 transition-opacity duration-300 hover:opacity-100">
                                <div className="posterImage__title font-bold text-7xl mb-1 text-left">
                                    {movie ? movie.original_title : movie.name}
                                </div>
                                <div className="posterImage__runtime text-4xl mb-4 ">
                                    {movie ? movie.release_date : ""}
                                    <span className="posterImage__rating ml-12">
                                        {movie ? movie.vote_average : ""}
                                        <i className="fas fa-star" />
                                    </span>
                                </div>
                                <div className="posterImage__description italic text-base mb-1 flex text-left w-1/2   ">
                                    {movie ? movie.overview : ""}
                                </div>
                            </div>
                        </Link>
                    ))}
                </Carousel>
                <div>
                    <Popular />
                    <Upcoming />
                    <TopSeries />
                    <TopRated />

                </div>
            </div>
        </>
    );
}

export default Hero;