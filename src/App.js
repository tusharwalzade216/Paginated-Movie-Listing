import "./styles.css";
import { ErrorBoundary, MovieList } from "./components";

export default function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <MovieList />
      </ErrorBoundary>
    </div>
  );
}
