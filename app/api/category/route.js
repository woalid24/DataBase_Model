import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
let prisma = new PrismaClient();

// Create
export async function POST(req, res) {
  const body = await req.json();

  try {
    const data = await prisma.category.create({
      data: body,
    });

    return NextResponse.json({ status: "success", data: data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}

// get All
export async function GET(req, res) {
  console.log("id");
  try {
    const data = await prisma.category.findMany({});

    return NextResponse.json({
      status: "success",
      data,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", data: error });
  }
}
