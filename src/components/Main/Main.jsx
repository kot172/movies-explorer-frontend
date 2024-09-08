import './Main.css'
import AboutProject from "../AboutProject/AboutProject";
import Register from "../Register/Register";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import NavTab from "../NavTab/NavTab";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

export default function Main({
  name,
  onRegister,
  onLogin,
  logOut,
  editUserData,
  setIsError,
  savedMovies,
  onDelete,
  addMovie,
  isSuccess,
  setSuccess,
  setIsEdit,
  isEdit
}) {


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
             <Movies savedMovies={savedMovies} addMovie={addMovie} setIsError={setIsError} />
           </>,
         savedmovies:
         <>
           <SavedMovies savedMovie={savedMovies} onDelete={onDelete} setIsError={setIsError} />
         </>,
         
           signin: <Login name={name} onLogin={onLogin} setIsError={setIsError} />,
           signup: <Register name={name} onRegister={onRegister} setIsError={setIsError} />,
          profile: 
          <Profile  name={name}
          logOut={logOut}
          editUserData={editUserData}
          setIsError={setIsError}
          isSuccess={isSuccess}
          setSuccess={setSuccess}
          setIsEdit={setIsEdit}
          isEdit={isEdit} />,
          pagenotfound: <PageNotFound />
        }[name]}
    </main>
  );
}
