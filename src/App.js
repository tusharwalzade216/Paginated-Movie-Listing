import "./styles.css";
import { MovieList } from "./pages";
import { ErrorBoundary } from "./components";

export default function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <MovieList />
      </ErrorBoundary>
    </div>
  );
}
