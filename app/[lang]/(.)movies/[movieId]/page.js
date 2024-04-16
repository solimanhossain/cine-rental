import Modal from "@/components/Modal";
import { notFound } from "next/navigation";
import { getDictionary } from "@/app/[lang]/_dictionaries/language";
import MovieDetails from "@/components/MovieDetails";
import { useFetchData } from "@/hooks";

export default async function OpenModalpage({ params: { lang, movieId } }) {
    const movies = await useFetchData(`${process.env.BASE_URL}/api/movies`);

    const movie = movies.results.find(
        (movie) => movie.id === parseInt(movieId)
    );

    if (!movie) notFound();

    const dict = await getDictionary(lang);

    return (
        <Modal>
            <MovieDetails movie={movie} dic={dict} />
        </Modal>
    );
}
