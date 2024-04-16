const { getMovies } = require("@/lib/data");
const { NextResponse } = require("next/server");

export async function GET(_Response) {
    const getAllMovies = await getMovies();
    if (!getAllMovies) {
        return NextResponse.json(
            { message: "Movies not found" },
            { status: 404 }
        );
    }
    return NextResponse.json(getAllMovies, { status: 200 });
}
