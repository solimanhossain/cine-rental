import Image from "next/image";

export default function MovieDetails({
    movie: {
        original_title,
        overview,
        backdrop_path,
        poster_path,
        release_date,
        vote_count,
        vote_average,
        popularity,
    },
    dic: { stream, download, releaseDate, averageVote, voteCount, popular },
}) {
    // console.log(movie);

    return (
        <section className=" bg-inherit text-inherit">
            <div>
                <Image
                    className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
                    src={backdrop_path}
                    alt="cover"
                    width={200}
                    height={300}
                />
            </div>

            <div className="grid grid-cols-12 py-12 gap-8">
                <div className="col-span-2">
                    <Image
                        src={poster_path}
                        alt="poster"
                        width={200}
                        height={300}
                    />
                </div>
                <div className="col-span-8">
                    <h2 className="font-bold text-slate-300 text-2xl">
                        {original_title}
                    </h2>
                    <p className="my-2 text-slate-400 italic">{overview}</p>
                    <ul className="text-slate-300 space-y-2 my-8">
                        <li>{releaseDate + " : " + release_date}</li>
                        <li>{averageVote + " : " + vote_average}</li>
                        <li>{voteCount + " : " + vote_count}</li>
                        <li>{popular + " : " + popularity}</li>
                    </ul>
                </div>
                <div className="col-span-2 space-y-4">
                    <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
                        {stream}
                    </button>
                    <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
                        {download}
                    </button>
                </div>
            </div>
        </section>
    );
}
