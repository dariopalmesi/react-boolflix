import { useEffect, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'


function App() {
  const [movies, setMovies] = useState({})
  const [searchMovie, setSearchMovie] = useState('')
  // const [movieFilter, setMovieFilter] = useState({})



  function fetchResult(url = 'https://api.themoviedb.org/3/search/movie?api_key=2b129c72fa5c2722b105bdcef3d40597&query=matrix') {
    fetch(url)
      .then(resp => resp.json())
      .then(results => {
        console.log(results);
        setMovies(results)

      })
  }
  function handleSearchClick() {
    const movieFilter = movies.filter((movie) => movie.includes(searchMovie))
    console.log(movieFilter);
    setSearchMovie(movieFilter)

    fetchResult()
  }
  useEffect(fetchResult, [])
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="" className="form-label">Name</label>
          <input
            type="search"
            className="form-control"
            name="searchText"
            id="searchText"
            aria-describedby="searchHelper"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSearchClick}
          >
            Submit
          </button>

        </div>
      </div>




      <section className='characters'>
        <div className="container">
          <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3'>
            {
              movies.results ?
                movies.results.map(movie => (
                  <div className="col" key={movie.id}>
                    <div className="card">

                      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                      <ul>
                        <li><h2>{movie.title}</h2></li>
                        <li>{movie.original_title}</li>
                        <li>{movie.original_language}</li>
                        <li>{movie.vote_average}</li>
                      </ul>
                    </div>
                  </div>
                )) :
                <p>No result yet</p>
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default App