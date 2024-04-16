import MovieFigure from "@/components/MovieFigure";
import { getDictionary } from "./_dictionaries/language";
import { useFetchData } from "@/hooks";

export default async function HomePage({ params }) {
    const lang = params.lang;
    const dict = await getDictionary(lang);
    const movies = await useFetchData(`${process.env.BASE_URL}/api/movies`);

    // const movies = await import("@/data/data.json").then(
    //     (module) => module.default
    // );

    return (
        <div className="content">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                {movies?.results?.map((movie) => (
                    <MovieFigure
                        key={movie.id}
                        movie={movie}
                        cart={dict.cart}
                    />
                ))}
            </div>
        </div>
    );
}
