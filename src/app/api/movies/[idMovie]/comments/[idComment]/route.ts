import { type NextRequest,NextResponse } from "next/server";
import prisma from "@/utils/prisma";
import  {ObjectId} from 'mongodb'; 

type Routeparams = {
    params:{
      idMovie: string,
      idComment:string
    }
}

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
    console.log(error)
    return NextResponse.json({status: 400})
  }
}



export  async function DELETE(request: NextRequest,{ params }: Routeparams) {
  try {
    const movie = await prisma.comments.delete({
      where: {
        movie_id: new  ObjectId(params.idMovie),
        id:new  ObjectId(params.idComment),
      },
    })
  return NextResponse.json(movie);
    
  } catch (error) {
    console.log(error)
    return NextResponse.json({status: 400})
  }
}