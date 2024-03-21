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
    const movie = await prisma.movies.findUnique({
      where: {
        id: new  ObjectId(params.idMovie),
      },
    })
  return NextResponse.json(movie);
  } catch (error) {
    return NextResponse.json({status: 400})
  }
    
}