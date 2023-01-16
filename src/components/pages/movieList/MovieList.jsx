import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { CardList } from "../../../orgamisms";
import { Alert, Pagination } from "../../../molecules";
import { getMoviesByTitle } from "../../../services";

const MovieList = () => {
  const [noOfPages, setNoOfPages] = useState(0);
  const [movieList, setMovieList] = useState({});
  const [error, setError] = useState({ hasError: false, message: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const loadMovies = async (page = 1) => {
    if (movieList[page]) return;
    setIsLoading(true);
    try {
      // using random search string for demonstration purpose
      const { data: response } = await getMoviesByTitle("Kung fu Panda", page);
      if (response?.Response === "False") {
        setError(({ hasError: true, message: response?.Error }));
      } else {
        if (noOfPages === 0)
          setNoOfPages(Math.ceil(response?.totalResults / 10));
        setMovieList(movieList => ({
          ...movieList,
          [currentPage]: response?.Search
        }));
        setError(({ hasError: false, message: '' }));
      }
    } catch (error) {
      console.error(error);
      setError(({ hasError: true, message: error }));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadMovies(currentPage);
  }, [currentPage]);

  return (
    <Container className="d-flex flex-column align-items-center">
      {error.hasError && (
        <Alert
          isOpen={error.hasError}
          message={error.message}
        />
      )}
      <CardList list={movieList[currentPage] ?? []} isLoading={isLoading} />
      {noOfPages > 1 && <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        noOfPages={noOfPages}
      />}
    </Container>
  );
};

export default MovieList;
