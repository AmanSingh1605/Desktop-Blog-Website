import Post from "@/models/Post";
import Connect from "@/utility/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {

  try {
    Connect();
    const post = await Post.findById(params.id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    throw new Error(err, { status: 500 });
  }
};
