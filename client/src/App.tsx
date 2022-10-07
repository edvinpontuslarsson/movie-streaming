import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // TODO
    // "In development, you will see two fetches in the Network tab. There is nothing wrong with that."
    // perhaps use apollo server and come back to this, with caching
    // https://beta.reactjs.org/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development
    console.log(process.env.REACT_APP_MOVIEDB_API_KEY);
  }, []);

  return (
    <div className="App">
      <div className="button-wrap">
        <button className="fetch-button">Fetch</button>
      </div>
    </div>
  );
}

export default App;
