import { useEffect, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'


function App() {
  const [movies, setMovies] = useState({})
  function fetchResult(url = 'https://api.themoviedb.org/3/search/movie?api_key=2b129c72fa5c2722b105bdcef3d40597&query=matrix') {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        setMovies(data)

      })
  }
  function handleClick(e) {
    fetchResult()
  }
  // useEffect(fetchResult, [])
  return (
    <>
      <button type='button' onClick={handleClick}>Fetch Characters</button>

      <section className='characters'>
        <div className="container">
          <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3'>
            {
              movies.results ?
                movies.results.map(movie => (
                  <div className="col" key={movie.id}>
                    <div className="card">
                      <p>{movie.title}</p>
                      <p>{movie.original_title}</p>
                      <p>{movie.original_language}</p>
                      <p>{movie.vote_average}</p>
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
