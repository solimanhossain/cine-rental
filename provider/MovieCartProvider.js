"use client";
import { MovieContext } from "@/context";
import { useState } from "react";

export default function MovieCartProvider({ children }) {
    const [cartMovie, setCartMovie] = useState();
    // console.log(movie);

    return (
        <MovieContext.Provider value={{ cartMovie, setCartMovie }}>
            {children}
        </MovieContext.Provider>
    );
}
