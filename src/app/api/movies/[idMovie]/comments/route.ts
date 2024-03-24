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
* /api/movies/{idMovie}/comments:
*   get:
*     description: Returns comment of one movie
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
  try {
    const comments = await prisma.comments.findMany({
      where: {
        movie_id: new  ObjectId(params.idMovie),
      },
    })
  return NextResponse.json({data:comments,status:200});
  } catch (error) {
    return NextResponse.json({status: 400})
  }
    
}

/**
* @swagger
* /api/movies/{idMovie}/comments:
*   post:
*     description: Create a  comment of a movie
*     parameters:
*         - name: idMovie
*           in: path
*           description: The id of the movie searched
*           schema:
*             type: integer
*     requestBody:
*       required: true
*       content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 email:
*                   type: string
*                   format: email
*                 name:
*                   type: string
*                 text:
*                   type: string
*     responses:
*         201:
*             description: Created Successfully
*         400: 
*             description: Bad Request
*               
*/
export  async function POST(request: NextRequest,{ params }: Routeparams) {
  try {
    const body = await request.json()
    const comment = await prisma.comments.create({
      data:{movie_id: new  ObjectId(params.idMovie),date:new Date(),...body} ,
    })
    return NextResponse.json({data:comment,status:201});
  } catch (error) {
    return NextResponse.json({status: 400})
  }
  

}