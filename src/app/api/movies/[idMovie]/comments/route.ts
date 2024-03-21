import { type NextRequest,NextResponse } from "next/server";
import prisma from "@/utils/prisma";
import  {ObjectId} from 'mongodb'; 

type Routeparams = {
    params:{
      idMovie: string
    }
}

export  async function GET(request: NextRequest,{ params }: Routeparams) {
  try {
    const comments = await prisma.comments.findMany({
      where: {
        movie_id: new  ObjectId(params.idMovie),
      },
    })
  return NextResponse.json(comments);
  } catch (error) {
    return NextResponse.json({status: 400})
  }
    
}

export  async function POST(request: NextRequest,{ params }: Routeparams) {
  try {
    const body = await request.json()
    const comment = await prisma.comments.create({
      data:{movie_id: new  ObjectId(params.idMovie),date:new Date(),...body} ,
    })
    return NextResponse.json(comment);
  } catch (error) {
    console.log(error)
    return NextResponse.json({status: 400})
  }
  

}