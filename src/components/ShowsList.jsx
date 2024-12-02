import { useGlobalContext } from "../contexts/GlobalContext"
import Flag from "react-world-flags";
export default function ShowList() {

    const { shows, nationsFlags } = useGlobalContext()
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
                        {shows.results && shows.results.map((show, index) => (
                            <div className="col" key={index} >
                                <h2 className="text-white">Tv Series</h2>
                                <div className="card">
                                    <img src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`} alt={show.title} />
                                    <ul>
                                        <li> {show.name} </li>
                                        <li>{show.original_name}</li>
                                        <li>{show.overview}</li>
                                        <li><Flag code={nationsFlags[show.original_language]} style={{ height: 20 }} /></li>
                                        <li>{numberIntegral(show.vote_average)} </li>
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