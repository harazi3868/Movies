export const api = '8706ff675e2762038eae4283839c862b';

//popular movies
export const POPULAR_MOVIES_URL =`https://api.themoviedb.org/3/movie/popular?api_key=${api}&language=en-US&page=1`;
//romantic
export const ROMANTIC_MOVIES_URL =`https://api.themoviedb.org/3/discover/movie?api_key=${api}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749`;
//comedy
export const COMEDY_MOVIES_URL =`https://api.themoviedb.org/3/discover/movie?api_key=${api}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35`;
//top rated
export const topRated =`https://api.themoviedb.org/3/movie/top_rated?api_key=${api}&language=en-US&page=1`;
//upcoming
export const upcoming =`https://api.themoviedb.org/3/movie/upcoming?api_key=${api}&language=en-US&page=1`;
//allmovies
export const MoviesAll =`https://api.themoviedb.org/3/movie/now_playing?api_key=${api}&language=en-US&page=1`;
//Season movies 
export const Season_MOVIES_URL = `https://api.themoviedb.org/3/trending/tv/day?api_key=${api}&language=en-US&page=1`;
//horror
export const HORROR_MOVIES_URL =`https://api.themoviedb.org/3/discover/movie?api_key=${api}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27`;
//cartoon
export const CARTOON_MOVIES_URL =`https://api.themoviedb.org/3/discover/movie?api_key=${api}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751`;
//top rated series
export const topRatedSeries =`https://api.themoviedb.org/3/tv/top_rated?api_key=${api}&language=en-US&page=1`;
//top rate family
export const topRatedFamily =`https://api.themoviedb.org/3/discover/movie?api_key=${api}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751`;
//Tv series with title and description and many videos
export const SERIES_URL = `https://api.themoviedb.org/3/tv/airing_today?api_key=${api}&language=en-US&page=1`;
//search video for api key
export const SEARCH_URL = `https://api.themoviedb.org/3/find/external_id?api_key=${api}&language=en-US&page=1&include_adult=false&query=`;
