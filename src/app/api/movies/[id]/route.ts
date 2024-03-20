import { type NextRequest,NextResponse } from "next/server";
import prisma from "@/utils/prisma";
import  {ObjectId} from 'mongodb'; 

type Routeparams = {
    params:{
        id: string
    }
}

export  async function GET(request: NextRequest,{ params }: Routeparams) {
    const movie = await prisma.movies.findUnique({
        where: {
          id: new  ObjectId(params.id),
        },
      })
    return NextResponse.json(movie);
}