import { useGlobalContext } from "../contexts/GlobalContext"
import Flag from "react-world-flags";
export default function MovieList() {

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
                <div>
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-6 g-3'>
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