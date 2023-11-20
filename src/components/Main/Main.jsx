import './Main.css'
import AboutProject from "../AboutProject/AboutProject";
import Register from "../Register/Register";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import NavTab from "../NavTab/NavTab";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { movies, saveMovies } from "../../utils/constants";
import { useState, useEffect } from "react";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import PageNotFound from '../PageNotFound/PageNotFound';

export default function Main({name, setLoggedIn }) {

  const [moviesAll, setMoviesAll] = useState([])
  const [saveMovie, setSaveMovie] = useState([])
  const [isCheckMoviesAll, setIsCheckMoviesAll] = useState(true)
  const [isCheckMoviesSave, setIsCheckMoviesSave] = useState(true)

  useEffect(() => {
    setMoviesAll(movies)
    setSaveMovie(saveMovies)
  }, [])

  function onCheckMoviesAll() {
    if (isCheckMoviesAll) {
      setIsCheckMoviesAll(false)

      setMoviesAll(moviesAll.filter((element) => element.duration <= 40))
    } else {
      setIsCheckMoviesAll(true)
      setMoviesAll(movies)
    }
  }

  function onCheckMoviesSave() {
    if (isCheckMoviesSave) {
      setIsCheckMoviesSave(false)
      setSaveMovie(saveMovie.filter((element) => element.duration <= 40))
    } else {
      setIsCheckMoviesSave(true)
      setSaveMovie(saveMovies)
    }
  }



  return (
    <main className="main">
      {
        {
          home: 
            <>
              <Promo />
              <NavTab />
              <AboutProject />
              <Techs />
              <AboutMe />
              <Portfolio />
            </>,
          

          movies: 
          <>
          <SearchForm />
          <MoviesCardList movies={moviesAll} />
          </>,
          savedmovies:
          <>
            <SearchForm isCheck={isCheckMoviesSave} changeShot={onCheckMoviesSave} />
            <MoviesCardList movies={saveMovie} />
          </>,
           signin: <Login name={name} setLoggedIn={setLoggedIn} />,
           signup: <Register name={name} setLoggedIn={setLoggedIn} />,
          profile: <Profile name={name} setLoggedIn={setLoggedIn} />,
          pagenotfound: <PageNotFound />
        }[name]}
    </main>
  );
}
