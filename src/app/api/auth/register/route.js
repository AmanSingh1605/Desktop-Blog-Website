import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import Connect from "@/utility/db";

export const POST = async (request) => {
  const { name, email, password } = await request.json();
  await Connect();
  const securePassword = await bcrypt.hash(password, 6);
  const newUser = new User({
    name,
    email,
    password: securePassword,
  });
  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err, message, {
      status: 500,
    });
  }
};
