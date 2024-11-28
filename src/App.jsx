import { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';
import { GlobalProvider } from './contexts/GlobalContext';
import MoviesList from './components/moviesList';

function App() {


  return (
    <>
      <GlobalProvider>
        <MoviesList />
      </GlobalProvider>


    </>
  );
}

export default App;

