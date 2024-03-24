import prisma from "@/utils/prisma";
import * as bcrypt from "bcrypt";
import { NextResponse,type NextRequest } from "next/server";



/**
* @swagger
* /api/login:
*   post:
*     description:  Return the user if credentials are right or null if not
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
*     responses:
*         200:
*             description:  returns the user if the connection is successful or null if the connection is not successful
*               
*/
export async function POST(request: NextRequest) {
  const body = await request.json();

  const user = await prisma.users.findFirst({
    where: {
      email: body.email,
    },
  });

  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...rest } = user;
    return NextResponse.json(rest);
  }

  return NextResponse.json(null);
}