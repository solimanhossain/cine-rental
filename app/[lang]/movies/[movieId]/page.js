import { notFound } from "next/navigation";
import MovieDetails from "@/components/MovieDetails";
import { getDictionary } from "@/app/[lang]/_dictionaries/language";
import { useFetchData } from "@/hooks";

export default async function MovieDetailspage({ params: { lang, movieId } }) {
    const movies = await useFetchData(`${process.env.BASE_URL}/api/movies`);

    const movie = movies.results.find(
        (movie) => movie.id === parseInt(movieId)
    );

    if (!movie) notFound();

    const dict = await getDictionary(lang);

    return <MovieDetails movie={movie} dic={dict} />;
}
