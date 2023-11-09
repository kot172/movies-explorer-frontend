// import logo from '../logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import Register from './Register/Register';
import { useState } from 'react';
import PageNotFound from './PageNotFound/PageNotFound';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className='page'>
    <div className='page__container'>
<Routes>
<Route path='/' element={
          <>
            <Header name='home' />
            <Main name='home'/>
            <Footer />
          </>
        } />
<Route path='/movies' element={
  <>
  <Header name='movies'/>
  <Main name='movies' />
  <Footer />
  </>
} />

<Route path='/saved-movies' element={
  <>
  <Header />
  <Main name='savedmovies'/>
  <Footer />
  </>
} />

<Route path='signup' element={
  <>
  <Main name='signup' />
  </>
} />

<Route path='signin' element={
  <Main name='signin' />
} />


<Route path='/profile' element={
          <>
            <Header />
            <Main name='profile' setLoggedIn={setLoggedIn}/>
          </>
        } />

        <Route path='*' element={
          <PageNotFound />
        } />

</Routes>

    <div className="App">
    
    </div>



    </div></div>
  );
}

export default App;
