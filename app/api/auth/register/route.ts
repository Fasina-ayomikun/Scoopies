import User from "@/app/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import { NextResponse } from "next/server";
import { connectToDB } from "@/app/utils/connect";

export const POST = async (req: Request) => {
  try {
    const {
      name,
      loggedInWithPassword,
      email,
      password,
      role = "user",
    } = await req.json();

    await connectToDB();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Please provide all credentials" },
        { status: 400 }
      );
    }

    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return NextResponse.json(
        { message: "Email address already in use" },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const token = jwt.sign({ email, name, role }, process.env.JWT_SECRET!, {
      expiresIn: "30d",
    });

    const cookie = serialize("scoopies_token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
      secure: process.env.NODE_ENV !== "development",
      sameSite: "lax",
    });

    await User.create({
      name,
      email,
      password: hashedPassword,
      loggedInWithPassword,
      role,
    });

    return new NextResponse(
      JSON.stringify({
        message: "User successfully created",
        user: { email, name, role },
      }),
      {
        status: 201,
        headers: {
          "Set-Cookie": cookie,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("[REGISTER_ERROR]", error);
    return NextResponse.json(
      { message: "Registration failed" },
      { status: 500 }
    );
  }
};
