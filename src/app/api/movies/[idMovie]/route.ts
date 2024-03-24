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
*         404: 
*             description: Movie Not found
*               
*/
export  async function GET(request: NextRequest,{ params }: Routeparams) {
  try {
    const movie = await prisma.movies.findUnique({
      where: {
        id: new  ObjectId(params.idMovie),
      },
    })
    if (movie){
      return NextResponse.json({data:movie,status:200});
    }else{
      return NextResponse.json({message:"Movie Not found",status: 404})
    }
  } catch (error) {
    return NextResponse.json({status: 400})
  }
    
}