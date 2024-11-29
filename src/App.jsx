import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';
import { GlobalContextProvider } from './contexts/GlobalContext';
import MoviesList from './components/moviesList';

function App() {


  return (
    <>
      <GlobalContextProvider>
        <MoviesList />
      </GlobalContextProvider>


    </>
  );
}

export default App;

