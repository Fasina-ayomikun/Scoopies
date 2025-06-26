import IceCream from "@/app/models/icecream";
import { connectToDB } from "@/app/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await connectToDB();
    const iceCream = await IceCream.findById(params.id);
    if (!iceCream) {
      return NextResponse.json(
        { message: "Ice Cream not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ iceCream }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to get ice cream" },
      { status: 500 }
    );
  }
};
export const PATCH = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const { name, desc, images, flavors, price, ingredients } = await req.json();
  try {
    await connectToDB();
    const iceCreamExists = await IceCream.findById(params.id);
    if (!iceCreamExists) {
      return NextResponse.json(
        { message: "Ice cream not found" },
        { status: 404 }
      );
    }

    iceCreamExists.desc = desc;
    iceCreamExists.name = name;
    iceCreamExists.flavors = flavors;
    iceCreamExists.ingredients = ingredients;
    iceCreamExists.price = price;
    iceCreamExists.images = images;
    await iceCreamExists.save();
    return NextResponse.json(
      { message: "Ice cream updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to update ice cream" },
      { status: 500 }
    );
  }
};
export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await connectToDB();
    const iceCreamExist = await IceCream.findById(params.id);
    if (!iceCreamExist) {
      return NextResponse.json(
        { message: "ice cream not found" },
        { status: 400 }
      );
    }
    await IceCream.deleteOne({ _id: params.id });
    return NextResponse.json(
      { message: "ice cream successfully deleted" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to delete ice cream" },
      { status: 500 }
    );
  }
};
