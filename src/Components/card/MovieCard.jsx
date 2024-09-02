import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function MovieCard({ movies }) {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const handleMovieClick = (movieId) => {
    navigate(`/movieDetail/${movieId}`);
  };

  return (
    <div className="flex flex-wrap  gap-8 justify-center items-center ">
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        movies.map((movie) => (
          <div
            key={movie.id}
            className="cards inline-block transform transition-transform duration-200 relative rounded-lg overflow-hidden m-0.19 cursor-pointer min-w-0 h-300 z-0 border border-gray-400"
            onClick={() => handleMovieClick(movie.id)}
          >
            <img
              className="cards__img h-80"
              src={`https://image.tmdb.org/t/p/original/${movie ? movie.poster_path : ""}`}
              alt=""
            />
            <div className="cards__overlay opacity-0 md:hover:opacity-100 absolute bottom-0 top-0 px-4 pb-4 h-290 flex flex-col w-85 justify-end bg-gradient-to-b from-transparent to-black transition-opacity duration-200">
              <div className="card__title font-bold text-lg mb-2">
                {movie ? movie.original_title || movie.name : ""}
              </div>
              <div className="card__runtime text-xs mb-1">
                {movie ? movie.release_date : ""}
                <span className="card__rating float-right">
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="card__description italic text-xs mb-1">
                {movie ? movie.overview.slice(0, 118) + "..." : ""}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default MovieCard;