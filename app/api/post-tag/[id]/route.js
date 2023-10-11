import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
let prisma = new PrismaClient();

// get one
export async function GET(req, { params }) {
  let id = parseFloat(params.id);

  try {
    const data = await prisma.post_tag.findUnique({
      where: { id: id },
    });

    return NextResponse.json({ status: "success", data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", data: error });
  }
}

// udpate
export async function PUT(req, { params }) {
  let body = await req.json();
  let id = parseFloat(params.id);

  try {
    const data = await prisma.post_tag.update({
      where: {
        id: id,
      },
      data: body,
    });

    return NextResponse.json({ status: "success", data: data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", data: error });
  }
}

// delete
export async function DELETE(req, { params }) {
  let id = parseFloat(params.id);

  try {
    const data = await prisma.post_tag.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({ status: "success", data: data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", data: error });
  }
}
