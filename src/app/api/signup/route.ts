import prisma from "@/utils/prisma";
import * as bcrypt from "bcrypt";
import { NextResponse,type NextRequest } from "next/server";


/**
* @swagger
* /api/signup:
*   post:
*     description:  Register a user
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
*                 password:
*                   type: string
*                 name:
*                   type: string
*     responses:
*         200:
*             description:  User have been created
*         400: 
*             description: Bad request
*               
*/
export async function POST(request: NextRequest) {
  const body = await request.json();
  try {
    if (body.password.length < 6){
      return NextResponse.json({message:"Votre mot de passe est trop court"},{status: 400})
    }
    if (body.name.length < 3){
      return NextResponse.json({message:"Votre nom est trop court"},{status: 400})
    }
    const user = await prisma.users.create({
      data: {
        email: body.email,
        name: body.name,
        password: await bcrypt.hash(body.password, 10),
      },
    });
    const { password, ...rest } = user;
    return NextResponse.json({data:rest},{status:201});
  } catch (error) {
 console.log("voila mon erreuruu",error)
    return NextResponse.json({status: 400})
  }
  
}