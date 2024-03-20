import { type NextRequest,NextResponse } from "next/server";
import prisma from "@/utils/prisma";


export  async function GET(request: NextRequest) {
    const movies = await prisma.movies.findMany({
        take:10,
    })
    return NextResponse.json(movies);
}