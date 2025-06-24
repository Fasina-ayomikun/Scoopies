import User from "@/app/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import { NextResponse } from "next/server";
import { connectToDB } from "@/app/utils/connect";

export const POST = async (req: Request, res: Response) => {
  const { name, loggedInWithPassword, email, password } = await req.json();
  try {
    await connectToDB();
    if (!name || !email || !password) {
      return NextResponse.json("Please provide all credentials", {
        status: 400,
      });
    }
    // if (loggedInWithPassword && !password) {
    //   return NextResponse.json("Please provide a password", { status: 400 });
    // }
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return NextResponse.json("Email address already in use", { status: 400 });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const token = jwt.sign({ email, name }, "JWT_SECRET", {
      expiresIn: "30d",
    });
    const cookie = serialize("scoopies_token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      path: "/",
      secure: process.env.NODE_ENV != "development",
    });
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      loggedInWithPassword,
    });

    return NextResponse.json(
      { message: "User successfully created", user: { email, name } },
      {
        status: 201,
        headers: {
          "Set-Cookie": cookie,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
