import { useGlobalContext } from "../contexts/GlobalContext";


export default function MoviesList() {
    const { movies } = useGlobalContext();
    console.log(movies);



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
    </section>
}