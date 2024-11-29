import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';
import { GlobalContextProvider, useGlobalContext } from './contexts/GlobalContext';
import Flag from "react-world-flags";

function App() {

  function AppHeader() {
    const { searchMovie, setSearchMovie, handleSearchClick } = useGlobalContext()

    return (
      <header>
        <div className="container">
          <div className="mb-3">
            <label htmlFor="searchText" className="form-label">
              Scrivi la tua ricerca
            </label>
            <input
              type="search"
              className="form-control"
              name="searchText"
              id="searchText"
              aria-describedby="searchHelper"
              placeholder="Search..."
              value={searchMovie}
              onChange={(e) => setSearchMovie(e.target.value)}
            />
            <button
              type="submit"
              className="btn btn-primary mt-2"
              onClick={handleSearchClick}
            >
              Cerca
            </button>
          </div>
        </div>
      </header>
    )
  }

  function AppMain() {
    const { movies, nationsFlags } = useGlobalContext()
    return (
      <main>
        <section className='characters'>
          <div className="container">
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3'>

              {movies.results && movies.results.map((movie, index) => (
                <div className="col" key={index} >
                  <div className="card">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    <ul>
                      <li> {movie.title} </li>
                      <li>{movie.original_name}</li>
                      <li>{movie.overview}</li>
                      <li>{movie.original_title} </li>
                      <li><Flag code={nationsFlags[movie.original_language]} style={{ height: 20 }} /></li>
                      <li>{movie.vote_average} </li>
                    </ul>
                  </div>

                </div>

              ))}


            </div>
          </div>
        </section>
      </main>
    )

  }

  return (
    <>
      <GlobalContextProvider>
        <AppHeader />
        <AppMain />
      </GlobalContextProvider>


    </>
  );
}

export default App;

