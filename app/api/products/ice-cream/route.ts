import IceCream from "@/app/models/icecream";
import { connectToDB } from "@/app/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    await connectToDB();
    const iceCreams = await IceCream.find({})
    .sort({ createdAt: -1 });
    return NextResponse.json({ iceCreams }, { status: 200 });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Failed to fetch all post" },
      { status: 500 }
    );
  }
};
