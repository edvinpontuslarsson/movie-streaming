import { getTrendingMovies } from './api/api';
import './App.css';

function App() {
  // TODO
  // because of strict mode
  // "In development, you will see two fetches in the Network tab. There is nothing wrong with that."
  // perhaps use apollo server and come back to this, with caching
  // https://beta.reactjs.org/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development

  // useEffect(() => {

  // }, []);

  return (
    <div className="App">
      <div className="button-wrap">
        <button
          className="fetch-button"
          onClick={async () => {
            const trendingMovies = await getTrendingMovies();
            console.log(trendingMovies);
          }}
        >
          Fetch trending movies
        </button>
      </div>
    </div>
  );
}

export default App;
