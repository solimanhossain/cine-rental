"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound({ params }) {
    const movieId = usePathname().split("/").pop();

    return (
        <main className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-4xl text-red-700">Opps!</h1>
            <h1 className="text-xl text-gray-600  m-4">
                This movie with <span className="font-bold">{movieId}</span> id
                was not found!
            </h1>
            <Link href="/" className="text-blue-700 underline m-4">
                ↩ Go Back Home
            </Link>
        </main>
    );
}
