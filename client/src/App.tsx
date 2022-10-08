import './App.css';
import { getAPIConfig, getTrendingMovies } from './api/api';
import { useState } from 'react';
import { IImgConfig, ITrendingMovieItem } from './interfaces/apiData';
import MoviePoster from './components/MoviePoster';

function App() {
  const [imgConfig, setImgConfig] = useState<null | IImgConfig>(null);
  const [trendingMovieItems, setTrendingMovieItems] = useState(
    [] as ITrendingMovieItem[]
  );

  const slickSliderSettings = {
    className: '',
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  return (
    <div className="App">
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

      {imgConfig &&
        trendingMovieItems.map((item) => (
          <MoviePoster imgConfig={imgConfig} movie={item} />
        ))}
    </div>
  );
}

export default App;
