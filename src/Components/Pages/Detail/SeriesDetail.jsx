import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../../Api';

function SeriesDetail() {
  const [series, setSeries] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/${id}?api_key=${api}&language=en-US&append_to_response=credits,videos`)
      .then((res) => {
        setSeries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!series) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex flex-wrap  gap-8 justify-center items-center">
      <img
        src={`https://image.tmdb.org/t/p/original/${series.backdrop_path}`}
        alt=""
        className="w-full h-[40rem] object-cover object-center brightness-50"
      />
      <div className="absolute flex flex-col md:flex-row gap-5 p-5 mt-[10rem]">
        <img
          src={`https://image.tmdb.org/t/p/original/${series.poster_path}`}
          alt=""
          className="w-[32rem] h-[40rem] object-cover ml-4"
        />
        <div className="flex flex-col justify-center items-start w-full h-full gap-4 mt-2">
          <h1 className="text-white text-2xl font-bold mt-4">{series.name}</h1>
          <div className="flex flex-wrap items-center w-full h-full gap-4 mt-4">
            {/* rating and genres */}
            <span className="text-[rgb(248,244,244)] text-2xl font-bold">{series.vote_average}<i className="fas fa-star" /></span>
            <span className="text-white bg-red-600 p-2 rounded-lg text-xl font-bold">
              {series.genres.slice(2).map((genre) => genre.name).join(", ")}
            </span>
          </div>
          <h2 className="text-2xl">Cast</h2>
          <div className="flex flex-wrap items-center w-full h-full">
            {/* cast */}
            {series.credits &&
              series.credits.cast.slice(0, 5).map((item, index) => (
                <div key={index} className="flex flex-col justify-center items-center w-[10rem] gap-4 mt-4">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                    alt=""
                    className="w-[8rem] h-[8rem] object-cover object-center rounded-full"
                  />
                  <span className="text-white text-xl font-bold">{item.name}</span>
                  <span className="text-white text-xs font-bold">{item.character}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* videos from youtube */}
      {/* red line */}
      <div className="flex flex-wrap flex-col w-full h-full md:mt-52 mb-10 mt-[58rem]">
        <div className="w-full h-1 bg-red-600"></div>
        <h2 className="text-4xl p-2 uppercase">Videos</h2>

        {series.videos.results.slice(0, 1).map((item, index) => (
          <iframe
            className="px-5 md:w-full w-[40rem] "
            width="1280"
            height="850"
            quality="high"
            src={`https://www.youtube.com/embed/${item.key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        ))}
      </div>
    </main>
  );
}

export default SeriesDetail;
