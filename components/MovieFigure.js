"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getGenre } from "../lib/genre";
import { useContext } from "react";
import { MovieContext } from "@/context";

export default function MovieFigure({ movie, cart }) {
    const route = useRouter();
    const { cartMovie, setCartMovie } = useContext(MovieContext);
    const { id, title, poster_path, vote_average, genre_ids } = movie;

    function handleAddtoCart(e) {
        e.stopPropagation();
        let check = cartMovie?.find((m) => m.id === id);
        if (check) {
            console.log("Already in cart");
            return;
        }
        if (!cartMovie) setCartMovie([movie]);
        else setCartMovie([...cartMovie, movie]);
    }

    function handleFavouritebtn(e) {
        e.stopPropagation();
        // console.log(e);
    }

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
                    {getGenre(genre_ids)}
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
                <div className="flex items-center justify-between gap-2">
                    <button
                        onClick={handleAddtoCart}
                        className="bg-primary w-full rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                    >
                        <span>{`$ ${200}`}</span> |
                        <Image
                            src="/assets/svg/tag.svg"
                            alt="tag"
                            width="18"
                            height="18"
                        />
                        <span>{cart}</span>
                    </button>
                    <button
                        onClick={handleFavouritebtn}
                        className="border border-primary border-1 rounded-lg p-2"
                    >
                        <Image
                            src="/assets/svg/heart.svg"
                            alt="tag"
                            width="18"
                            height="18"
                        />
                    </button>
                </div>
            </figcaption>
        </figure>
    );
}
