import { type NextRequest,NextResponse } from "next/server";
import prisma from "@/utils/prisma";




/**
* @swagger
* /api/movies:
*   get:
*       description: Returns movies
*       responses:
*           200:
*               description: Hello Movies
*           400: 
*               description: Bad Request
*               
*/
export  async function GET(request: NextRequest) {

    try {
        const url = new URL(request.url)
        const skip:null|string = url.searchParams.get("skip")
        const take:null|string = url.searchParams.get("take")
        const movies = await prisma.movies.findMany({
            skip: skip? parseInt(skip) : 0,
            take: take? parseInt(take): 10,
        
        })
        return NextResponse.json(movies);
    } catch (error) {
        return NextResponse.json({status: 400})
    }
   
    
}