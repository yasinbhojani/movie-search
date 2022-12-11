import ReactDOM from "react-dom";
import { useState, useContext } from "react";
import Results from "./components/Results/Results";
import Search from "./components/Search/Search";
import Loading from "./components/UI/Loading";
import Header from "./components/Header/Header";
import LoadingContext from "./context/loading-context";
import MovieDetail from "./components/MovieDetails/MovieDetail/MovieDetail";

function App() {
  const loadingCtx = useContext(LoadingContext);
  const [movies, setMovies] = useState([]);
  const [clickedMovieData, setClickedMovieData] = useState({});
  const [modalIsVisible, setModalIsVisible] = useState(false);

  // This search function is used when search term is entered by the user
  const searchMovies = async (searchTerm) => {
    searchTerm.replace(" ", "+");
    loadingCtx.setIsLoading(true);
    let moviedata;
    try {
      const data = await fetch(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchTerm}`
      );
      moviedata = await data.json();
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }

    if (moviedata.Response === "True") {
      setMovies(moviedata.Search);
    } else {
      alert(moviedata.Error);
    }
    loadingCtx.setIsLoading(false);
  };

  // This search function is used when a user clicks on a particular movie
  const searchByIMDBId = async (imdbID) => {
    loadingCtx.setIsLoading(true);
    let moviedata;
    try {
      const data = await fetch(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${imdbID}&plot=full`
      );
      moviedata = await data.json();
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }

    if (moviedata.Response === "True") {
      setModalIsVisible(true);
      setClickedMovieData(moviedata);
    } else {
      alert(moviedata.Error);
    }
    loadingCtx.setIsLoading(false);
  };

  const ModalCloseHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      {modalIsVisible
        ? ReactDOM.createPortal(
            <MovieDetail
              movieData={clickedMovieData}
              onModalClose={ModalCloseHandler}
            />,
            document.getElementById("movie-modal")
          )
        : null}
      <Header />
      <div className="container">
        <Search searchMovies={searchMovies} />
        {movies.length > 0 ? <Results movies={movies} onMovieClick={searchByIMDBId}/> : null}
        {loadingCtx.isLoading
          ? ReactDOM.createPortal(
              <Loading />,
              document.getElementById("loading")
            )
          : null}
      </div>
    </>
  );
}

export default App;
