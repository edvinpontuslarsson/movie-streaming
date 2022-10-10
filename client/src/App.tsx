import './App.css';
import { getAPIConfig, getTrendingMediaItems } from './api/api';
import { useEffect, useState } from 'react';
import { IPosterImageConfig, ITrendingMediaItem } from './interfaces/apiData';
import MovieList from './components/MovieList';
import { chunkArray } from './utils/utils';
import { Typography } from '@mui/material';

function App() {
  const [posterImageConfig, setPosterImageConfig] =
    useState<null | IPosterImageConfig>(null);

  const [trendingMovies, setTrendingMovies] = useState(
    [] as ITrendingMediaItem[]
  );
  const [trendingTvShows, setTrendingTvShows] = useState(
    [] as ITrendingMediaItem[]
  );

  useEffect(() => {
    async function handleAPIFetch() {
      try {
        const config = await getAPIConfig();

        if (config) {
          setPosterImageConfig(config.images);

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
    }

    handleAPIFetch();
  }, []);

  return (
    <div className="App">
      {posterImageConfig && (
        <>
          <Typography
            variant="h4"
            style={{ textAlign: 'center', marginTop: 20, marginBottom: 20 }}
          >
            Trending Movies
          </Typography>
          <MovieList
            movieListChunks={chunkArray(4, trendingMovies)}
            imgConfig={posterImageConfig}
          />

          <Typography
            variant="h4"
            style={{ textAlign: 'center', marginTop: 40, marginBottom: 20 }}
          >
            Trending TV
          </Typography>
          <MovieList
            movieListChunks={chunkArray(4, trendingTvShows)}
            imgConfig={posterImageConfig}
          />
        </>
      )}
    </div>
  );
}

export default App;
