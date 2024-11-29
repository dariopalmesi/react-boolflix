import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';
import { GlobalContextProvider, useGlobalContext } from './contexts/GlobalContext';

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
    const { movies } = useGlobalContext()
    return (
      <main>
        <section className='characters'>
          <div className="container">
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3'>
              {movies && movies.map((movie, index) => (
                <li key={index} style={{ borderBottom: '1px solid black', marginBottom: '1rem' }}>
                  {movie.original_title} <br />
                  {movie.title} <br />
                  {movie.vote_average} <br />
                  {movie.original_language}

                </li>
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

