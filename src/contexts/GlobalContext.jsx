import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ Children }) => {
    const [movies, setMovies] = useState({});
    const [searchMovie, setSearchMovie] = useState('');


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
    return (
        <GlobalContext.Provider value={{ movies, setMovies, searchMovie, setSearchMovie }}>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="searchText" className="form-label">
                        Name
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
                        Submit
                    </button>
                </div>
            </div>
            {Children}
        </GlobalContext.Provider>
    )
}
export const movieGlobalContext = () => useContext(GlobalContext)