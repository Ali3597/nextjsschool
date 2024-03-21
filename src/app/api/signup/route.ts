import prisma from "@/utils/prisma";
import * as bcrypt from "bcrypt";
import { NextResponse,type NextRequest } from "next/server";


export async function POST(request: NextRequest) {
  const body = await request.json();

  const user = await prisma.users.create({
    data: {
      email: body.email,
      name: body.name,
      password: await bcrypt.hash(body.password, 10),
    },
  });

  const { password, ...rest } = user;
  return NextResponse.json(rest);
}