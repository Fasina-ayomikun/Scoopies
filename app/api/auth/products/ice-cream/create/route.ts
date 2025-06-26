import { NextResponse } from "next/server";
import { connectToDB } from "@/app/utils/connect";
import { v2 as cloudinary } from "cloudinary";
import IceCream from "@/app/models/icecream";

// ✅ Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

export const POST = async (req: Request) => {
  try {
    await connectToDB();

    const { name, desc, images, flavors, price, ingredients } =
      await req.json();

    if (!name || !desc || !images || !flavors || !price || !ingredients) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    console.log("====================================");
    console.log(
      process.env.CLOUD_NAME,
      process.env.CLOUD_API_KEY,
      process.env.CLOUD_API_SECRET
    );
    console.log("====================================");
    //  Upload images to Cloudinary
    const uploadedImages = await Promise.all(
      images.map(async (base64: { url: string }) => {
        const res = await cloudinary.uploader.upload(base64.url, {
          folder: "ice-creams",
        });
        return {
          public_id: res.public_id,
          url: res.secure_url,
        };
      })
    );

    // 🧊 Create ice cream product
    const product = await IceCream.create({
      name,
      desc,
      images: uploadedImages,
      flavors,
      price,
      ingredients,
    });

    return NextResponse.json(
      { message: "Ice cream created", product },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating ice cream:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
