export interface ITrendingMovies {
  results: ITrendingMovieItem[];
}

// example item

// adult: false
// backdrop_path: '/l1ORpdYr8uFZ9MNYKoq1p6fIc4M.jpg'
// genre_ids: (2)[(28, 14)]
// id: 894205
// media_type: 'movie'
// original_language: 'en'
// original_title: 'Werewolf by Night'
// overview: 'On a dark and somber night, a secret cabal of monster hunters emerge from the shadows and gather at the foreboding Bloodstone Temple following the death of their leader. In a strange and macabre memorial to the leader’s life, the attendees are thrust into a mysterious and deadly competition for a powerful relic—a hunt that will ultimately bring them face to face with a dangerous monster.'
// popularity: 94.959
// poster_path: '/mvIvNKRIJPPS7WSFarFhOAGIVnU.jpg'
// release_date: '2022-10-07'
// title: 'Werewolf by Night'
// video: false
// vote_average: 7.7
// vote_count: 91

interface ITrendingMovieItem {
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
