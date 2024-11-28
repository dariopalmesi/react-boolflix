export default function MoviesList() {

    return (
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
    )
}