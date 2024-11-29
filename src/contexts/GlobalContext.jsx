import { createContext, useContext, useState, useEffect } from "react";
import Flag from "react-world-flags";

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
    const [movies, setMovies] = useState({});
    const [searchMovie, setSearchMovie] = useState('');

    const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;
    const api_movies = 'https://api.themoviedb.org/3/search/movie?'
    const api_tv = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${searchMovie}`

    const values = {
        movies,
        searchMovie,
        setSearchMovie,
        handleSearchClick,
        api_movies,

    }



    function fetchMovies(query) {
        const url = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${searchMovie}`;
        fetch(url)
            .then((resp) => resp.json())
            .then((results) => {
                console.log(results);
                setMovies(results);
            })
            .catch((error) => console.error('Errore nella chiamata API:', error));
    }

    function fetchTV(query) {
        const url = `${api_tv}api_key=${api_key}&query=${query}`;
        fetch(url)
            .then((resp) => resp.json())
            .then((results) => {
                console.log(results);
                setMovies(results);
            })
            .catch((error) => console.error('Errore nella chiamata API:', error));
    }


    function handleSearchClick() {

        fetchMovies(searchMovie);
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

            {children}

        </GlobalContext.Provider>
    )
}
function useGlobalContext() {
    return useContext(GlobalContext);
}

export { GlobalContextProvider, useGlobalContext }