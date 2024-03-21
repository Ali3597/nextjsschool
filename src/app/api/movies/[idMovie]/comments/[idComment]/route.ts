import { type NextRequest,NextResponse } from "next/server";
import prisma from "@/utils/prisma";
import  {ObjectId} from 'mongodb'; 

type Routeparams = {
    params:{
      idMovie: string,
      idComment:string
    }
}

/**
* @swagger
* /api/movies/{idMovie}/comments/{idComment}:
*   get:
*     description: Returns one comment
*     parameters:
*         - name: idMovie
*           in: path
*           description: The id of movie searched
*           schema:
*             type: integer
*         - name: idComment
*           in: path
*           description: The id of the comment searched
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
    const movie = await prisma.comments.findUnique({
      where: {
        movie_id: new  ObjectId(params.idMovie),
        id:new  ObjectId(params.idComment),
      },
    })
  return NextResponse.json(movie);
    
  } catch (error) {
    return NextResponse.json({status: 400})
  }

}

/**
* @swagger
* /api/movies/{idMovie}/comments/{idComment}:
*   put:
*     description: Update a  comment of a movie
*     parameters:
*         - name: idMovie
*           in: path
*           description: The id of the movie searched
*           schema:
*             type: integer
*         - name: idComment
*           in: path
*           description: The id of the comment searched
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
*                   required: false
*                 name:
*                   type: string
*                   required: false
*                 text:
*                   type: string
*                   required: false
*     responses:
*         200:
*             description: Created Successfully
*         400: 
*             description: Bad Request
*               
*/
export  async function PUT(request: NextRequest,{ params }: Routeparams) {
  try {
    const body = await request.json()
    const comment = await prisma.comments.update({
      where: {
        movie_id: new  ObjectId(params.idMovie),
        id:new  ObjectId(params.idComment),
      },
      data:{date:new Date(),...body} ,
    })
    return NextResponse.json(comment);
  } catch (error) {
    
    return NextResponse.json({status: 400})
  }
}


/**
* @swagger
* /api/movies/{idMovie}/comments/{idComment}:
*   delete:
*     description: Delete one comment
*     parameters:
*         - name: idMovie
*           in: path
*           description: The id of movie searched
*           schema:
*             type: integer
*         - name: idComment
*           in: path
*           description: The id of the comment searched
*           schema:
*             type: integer
*     responses:
*         200:
*             description: Fetched Successfully
*         400: 
*             description: Bad Request
*               
*/
export  async function DELETE(request: NextRequest,{ params }: Routeparams) {
  try {
     await prisma.comments.delete({
      where: {
        movie_id: new  ObjectId(params.idMovie),
        id:new  ObjectId(params.idComment),
      },
    })
  return NextResponse.json({"message":"Deleted successfully"});
    
  } catch (error) {
    return NextResponse.json({status: 400})
  }
}