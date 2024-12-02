import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
    const [movies, setMovies] = useState({});
    const [shows, setShows] = useState({});
    const [searchMovie, setSearchMovie] = useState('');
    const [searchShows, setSearchShows] = useState('');



    const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;
    const api_movies = `https://api.themoviedb.org/3/search/movie`
    const api_show = `https://api.themoviedb.org/3/search/tv`

    const nationsFlags = {
        en: 'gb',
        it: 'it',
        fr: 'fr',
        ja: 'jp',
        ru: 'ru',
        zh: 'cn',
        de: 'de',
        cs: 'cz',
        es: 'es',
        ar: 'sa',
        pt: 'pt',
        nl: 'nl',
        ko: 'kr',
        sv: 'se',
        tr: 'tr',
        pl: 'pl',
        el: 'gr',
        hi: 'in',
        no: 'no',
        fi: 'fi',
        da: 'dk'
    };


    const values = {
        movies,
        searchMovie,
        setSearchMovie,
        handleSearchClick,
        api_movies,
        nationsFlags,
        shows,
        setShows,
        setSearchShows,
        searchShows
    }



    function fetchMovies() {
        const url = `${api_movies}?api_key=${api_key}&query=${searchMovie}`;
        fetch(url)
            .then((resp) => resp.json())
            .then((results) => {
                console.log(results);
                setMovies(results);
            })
            .catch((error) => console.error('Errore nella chiamata API:', error));
    }

    function fetchShows() {
        const url = `${api_show}?api_key=${api_key}&query=${searchMovie}`;
        fetch(url)
            .then((resp) => resp.json())
            .then((results) => {
                console.log(results);
                setShows(results);
            })
            .catch((error) => console.error('Errore nella chiamata API:', error));
    }



    function handleSearchClick() {

        fetchMovies(searchMovie);
        fetchShows(searchShows)
    }

    return (
        <GlobalContext.Provider value={values}>

            {children}

        </GlobalContext.Provider>
    )
}
function useGlobalContext() {
    return useContext(GlobalContext);
}

export { GlobalContextProvider, useGlobalContext }