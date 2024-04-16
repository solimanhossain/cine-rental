const { getSingleMovie, deleteMovie, editMovie } = require("@/lib/data");
const { NextResponse } = require("next/server");

function notFound() {
    return NextResponse.json({ message: "Movie not found" }, { status: 404 });
}

export async function GET(_request, { params }) {
    const movieId = parseInt(params?.id);
    const singleMovie = await getSingleMovie(movieId);
    if (!singleMovie) return notFound();
    return NextResponse.json(singleMovie, { status: 200 });
}

export async function PATCH(request, { params }) {
    const movieId = parseInt(params?.id);
    const data = await request.json();
    const updatedMovie = await editMovie(movieId, data.title);
    if (!updatedMovie) return notFound();
    return NextResponse.json(updatedMovie, { status: 200 });
}

export async function DELETE(_request, { params }) {
    const movieId = parseInt(params?.id);
    const deletedMovie = await deleteMovie(movieId);
    if (!deletedMovie) return notFound();
    return NextResponse.json(deletedMovie, { status: 200 });
}
