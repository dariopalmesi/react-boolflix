import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';
import { GlobalContextProvider, useGlobalContext } from './contexts/GlobalContext';
import AppLogo from './components/AppLogo';
import Flag from "react-world-flags";

function App() {

  function AppHeader() {
    const { searchMovie, setSearchMovie, handleSearchClick } = useGlobalContext()

    return (
      <header className='bg-black'>
        <div className="container d-flex justify-content-end align-items-center gap-3 p-3">
          <div className="mb-3 d-flex align-items-center gap-3 ">
            <label htmlFor="searchText" className="form-label text-white">
              Scrivi la tua ricerca
            </label>
            <input
              type="search"
              className=""
              name="searchText"
              id="searchText"
              aria-describedby="searchHelper"
              placeholder="Search..."
              value={searchMovie}
              onChange={(e) => setSearchMovie(e.target.value)}
            />
            <button
              type="submit"
              className="btn btn-dark mt-2"
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
    const numberIntegral = (vote) => {
      const numberStars = Math.ceil(vote * 0.5)
      const completeStars = []

      for (let i = 1; i <= 5; i++) {
        if (i <= numberStars) {
          completeStars.push(<i key={i} className="bi bi-star-fill text-warning me-2"></i>);
        } else {
          completeStars.push(<i key={i} className="bi bi-star text-warning me-2"></i>);
        }
      }

      return completeStars
    }
    return (
      <main className='bg-dark'>
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
                      <li>{numberIntegral(movie.vote_average)} </li>
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
        <AppLogo />
        <AppHeader />
        <AppMain />
      </GlobalContextProvider>


    </>
  );
}

export default App;

