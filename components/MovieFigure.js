"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MovieFigure({ movie, cart }) {
    const route = useRouter();
    const { id, title, poster_path, vote_average } = movie;

    return (
        <figure
            onClick={() => route.push(`/movies/${id}`)}
            className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl cursor-pointer"
        >
            <Image
                className="w-full object-cover"
                src={poster_path}
                alt="poster"
                width={400}
                height={400}
            />
            <figcaption className="pt-4">
                <h3 className="text-xl mb-1">{title}</h3>
                <p className="text-[#575A6E] text-sm mb-2">
                    {"Action/Adventure/Sci-fi"}
                </p>
                <div className="flex items-center space-x-1 mb-5">
                    {Array.from({ length: vote_average / 2 }, (_, index) => (
                        <Image
                            key={index}
                            className="w-[14px] h-[14px]"
                            src="/assets/svg/star.svg"
                            width={14}
                            height={14}
                            alt="star"
                        />
                    ))}
                </div>
                <button className="bg-primary w-full rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm">
                    <span>{`$ ${200}`}</span> |
                    <Image
                        src="/assets/svg/tag.svg"
                        alt="tag"
                        width="18"
                        height="18"
                    />
                    <span>{cart}</span>
                </button>
            </figcaption>
        </figure>
    );
}
