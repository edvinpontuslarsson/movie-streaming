import './App.css';
import { getAPIConfig, getTrendingMovies } from './api/api';
import { useState } from 'react';
import { IImgConfig, ITrendingMovieItem } from './interfaces/apiData';
import MovieList from './components/MovieList';
import { chunkArray } from './utils/utils';
import { Typography } from '@mui/material';

function App() {
  const [imgConfig, setImgConfig] = useState<null | IImgConfig>(null);
  const [trendingMovieItems, setTrendingMovieItems] = useState(
    [] as ITrendingMovieItem[]
  );

  return (
    <div className="App">
      <Typography
        variant="h4"
        style={{ textAlign: 'center', marginTop: 20, marginBottom: 20 }}
      >
        Trending Movies
      </Typography>
      {imgConfig && (
        <MovieList
          movieListChunks={chunkArray(5, trendingMovieItems)}
          imgConfig={imgConfig}
        />
      )}

      <div className="button-wrap">
        <button
          className="fetch-button"
          onClick={async () => {
            const config = await getAPIConfig();

            if (config) {
              setImgConfig(config.images);

              const trendingMovies = await getTrendingMovies();
              setTrendingMovieItems(trendingMovies.results);
            }
          }}
        >
          Fetch trending movies
        </button>
      </div>
    </div>
  );
}

export default App;
