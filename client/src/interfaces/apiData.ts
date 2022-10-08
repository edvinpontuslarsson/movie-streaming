export interface IAPIConfig {
  images: IImgConfig;
}

export interface IImgConfig {
  backdrop_sizes: string[]; //  ['w300', 'w780', 'w1280', 'original'];
  base_url: string; // 'http://image.tmdb.org/t/p/';
  logo_sizes: string[]; // ['w45', 'w92', 'w154', 'w185', 'w300', 'w500', 'original'];
  poster_sizes: string[]; // ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'];
  profile_sizes: string[]; // ['w45', 'w185', 'h632', 'original'];
  secure_base_url: string; // 'https://image.tmdb.org/t/p/';
  still_sizes: string[]; // ['w92', 'w185', 'w300', 'original'];
}

export interface ITrendingMovies {
  results: ITrendingMovieItem[];
}

export interface ITrendingMovieItem {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
}
