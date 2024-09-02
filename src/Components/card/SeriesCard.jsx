import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function SeriesCard({ series }) {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const handleSeriesClick = (seriesId) => {
    navigate(`/seriesDetail/${seriesId}`);
  };

  return (
    <div className="flex flex-wrap  gap-8 justify-center items-center w-full">
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        series.map((series) => (
          <div
            key={series.id}
            className="cards inline-block transform transition-transform duration-200 relative rounded-lg overflow-hidden m-0.19 cursor-pointer min-w-0 h-300 z-0 border border-gray-400"
            onClick={() => handleSeriesClick(series.id)}
          >
            <img
              className="cards__img h-80"
              src={`https://image.tmdb.org/t/p/original/${series ? series.poster_path : ''}`}
              alt=""
            />
            <div className="cards__overlay opacity-0 md:hover:opacity-100 absolute bottom-0 top-0 px-4 pb-4 h-290 flex flex-col w-85 justify-end bg-gradient-to-b from-transparent to-black transition-opacity duration-200">
              <div className="card__title font-bold text-lg mb-2">
                {series ? series.original_name || series.name : ''}
              </div>
              <div className="card__runtime text-xs mb-1">
                {series ? series.first_air_date : ''}
                <span className="card__rating float-right">
                  {series ? series.vote_average : ''}
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="card__description italic text-xs mb-1">
                {series ? series.overview.slice(0, 118) + '...' : ''}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default SeriesCard;
