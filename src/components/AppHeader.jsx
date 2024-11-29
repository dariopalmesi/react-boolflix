import { useGlobalContext } from "../contexts/GlobalContext"

export default function AppHeader() {
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
