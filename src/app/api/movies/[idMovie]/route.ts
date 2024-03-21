import { type NextRequest,NextResponse } from "next/server";
import prisma from "@/utils/prisma";
import  {ObjectId} from 'mongodb'; 

type Routeparams = {
    params:{
        idMovie: string
    }
}


/**
* @swagger
* /api/movies/{idMovie}:
*   get:
*     description: Returns one movie 
*     parameters:
*         - name: idMovie
*           in: path
*           description: The id of the movie searched
*           schema:
*             type: integer
*     responses:
*         200:
*             description: Fetched Successfully
*         400: 
*             description: Bad Request
*               
*/
export  async function GET(request: NextRequest,{ params }: Routeparams) {
  console.log(params.idMovie, "mon ididiidididid")
  try {
    const movie = await prisma.movies.findUnique({
      where: {
        id: new  ObjectId(params.idMovie),
      },
    })
    console.log(movie," mn giflflms")
  return NextResponse.json(movie);
  } catch (error) {
    console.log(error,"mon errrreeeee")
    return NextResponse.json({status: 400})
  }
    
}