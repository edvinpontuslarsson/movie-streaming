import { getAPIConfig, getTrendingMovies } from './api/api';
import './App.css';
import { useState } from 'react';
import { ITrendingMovieItem } from './interfaces/apiData';
import MoviePoster from './components/MoviePoster';

function App() {
  const [trendingMovieItems, setTrendingMovieItems] = useState(
    [] as ITrendingMovieItem[]
  );

  return (
    <div className="App">
      <div className="button-wrap">
        <button
          className="fetch-button"
          onClick={async () => {
            const config = await getAPIConfig();
            // console.log(config);

            if (config) {
              const trendingMovies = await getTrendingMovies();
              //console.log(trendingMovies.results);
              setTrendingMovieItems(trendingMovies.results);
            }
          }}
        >
          Fetch trending movies
        </button>
      </div>
      <div>
        {trendingMovieItems.map((item) => (
          <MoviePoster movie={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
