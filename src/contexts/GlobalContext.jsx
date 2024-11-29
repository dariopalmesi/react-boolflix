import { createContext, useContext, useState, useEffect } from "react";
import Flag from "react-world-flags";

const GlobalContext = createContext();

function GlobalContextProvider({ Children }) {
    const [movies, setMovies] = useState({});
    const [searchMovie, setSearchMovie] = useState('');

    const values = {
        movies,
        searchMovie,
        setSearchMovie,
        fetchResult,
        handleSearchClick,
    }



    function fetchResult(query) {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=2b129c72fa5c2722b105bdcef3d40597&query=${query}`;
        fetch(url)
            .then((resp) => resp.json())
            .then((results) => {
                console.log(results);
                setMovies(results);
            })
            .catch((error) => console.error('Errore nella chiamata API:', error));
    }


    function handleSearchClick() {

        fetchResult(searchMovie);
    }
    const nationsFlags = {
        en: 'gb',
        it: 'it',
        fr: 'fr',
        ja: 'jp',
        ru: 'ru',
        zh: 'cn',
        de: 'de',
        cs: 'cz',
        es: 'es'
    }
    return (
        <GlobalContext.Provider value={{ values }}>
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
            {Children}
            {/* <section className='characters'>
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
                                                <li><Flag code={nationsFlags[movie.original_language]} style={{ height: 20 }} /></li>
                                                <li>{movie.vote_average}</li>
                                            </ul>
                                        </div>
                                    </div>
                                )) :
                                <p>No result yet</p>
                        }
                    </div>
                </div>
            </section> */}
        </GlobalContext.Provider>
    )
}
function useGlobalContext() {
    return useContext(GlobalContext);
}

export { GlobalContextProvider, useGlobalContext }