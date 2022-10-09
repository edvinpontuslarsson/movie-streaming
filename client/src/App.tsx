import './App.css';
import { getAPIConfig, getTrendingMediaItems } from './api/api';
import { useState } from 'react';
import { IImgConfig, ITrendingMediaItem } from './interfaces/apiData';
import MovieList from './components/MovieList';
import { chunkArray } from './utils/utils';
import { Typography } from '@mui/material';

function App() {
  const [imgConfig, setImgConfig] = useState<null | IImgConfig>(null);
  const [trendingMovies, setTrendingMovies] = useState(
    [] as ITrendingMediaItem[]
  );
  const [trendingTvShows, setTrendingTvShows] = useState(
    [] as ITrendingMediaItem[]
  );

  return (
    <div className="App">
      {imgConfig && (
        <>
          <Typography
            variant="h4"
            style={{ textAlign: 'center', marginTop: 20, marginBottom: 20 }}
          >
            Trending Movies
          </Typography>
          <MovieList
            movieListChunks={chunkArray(5, trendingMovies)}
            imgConfig={imgConfig}
          />

          <Typography
            variant="h4"
            style={{ textAlign: 'center', marginTop: 40, marginBottom: 20 }}
          >
            Trending TV
          </Typography>
          <MovieList
            movieListChunks={chunkArray(5, trendingTvShows)}
            imgConfig={imgConfig}
          />
        </>
      )}

      <div className="button-wrap">
        <button
          className="fetch-button"
          onClick={async () => {
            try {
              const config = await getAPIConfig();

              if (config) {
                setImgConfig(config.images);

                const trendingMedia = await getTrendingMediaItems();

                const movies = trendingMedia.results.filter(
                  (media) => media.media_type === 'movie'
                );
                setTrendingMovies(movies);

                const tvShows = trendingMedia.results.filter(
                  (media) => media.media_type === 'tv'
                );
                setTrendingTvShows(tvShows);
              }
            } catch (error) {}
          }}
        >
          Fetch trending movies
        </button>
      </div>
    </div>
  );
}

export default App;
