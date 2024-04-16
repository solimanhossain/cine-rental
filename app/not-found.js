import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-4xl text-red-700 dark:text-white">
                404 | The page not found!
            </h1>
            <p className="text-xl text-gray-600 m-4">
                The page you are looking for does not exist.
            </p>
            <Link href="/" className="text-green-600 underline m-4">
                ↩ Go Back Home
            </Link>
        </main>
    );
}
