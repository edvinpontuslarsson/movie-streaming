import { getTrendingMovies } from './api/api';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="button-wrap">
        <button
          className="fetch-button"
          onClick={async () => {
            const trendingMovies = await getTrendingMovies();
            console.log(trendingMovies.results);
          }}
        >
          Fetch trending movies
        </button>
      </div>
    </div>
  );
}

export default App;
