import IceCream from "@/app/models/icecream";
import { connectToDB } from "@/app/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    await connectToDB();

    const { searchParams } = new URL(req.url);
    const flavor = searchParams.get("flavor");
    const count = parseInt(searchParams.get("count") || "6", 10); // initial count is 6

    const filter: any = {};
    if (flavor) {
      console.log(flavor);

      if (flavor.toLowerCase() !== "all") {
        filter.flavors = flavor;
      }
    }

    const iceCreams = await IceCream.find(filter)
      .sort({ createdAt: -1 })
      .limit(count);

    const allFlavors = await IceCream.distinct("flavors");
    const total = await IceCream.countDocuments(filter);

    return NextResponse.json(
      {
        iceCreams,
        allFlavors,
        hasMore: count < total,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fetch error:", error);
    return NextResponse.json(
      { message: "Failed to fetch ice creams" },
      { status: 500 }
    );
  }
};
