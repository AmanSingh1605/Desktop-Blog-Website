import Post from "@/models/Post";
import connect from "@/utility/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const url = new URL(request.url);
  const userName = url.searchParams.get("userName");
  try {
    await connect();
    const post = await Post.find(userName && { userName });
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse(err, { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();
  const newPost = new Post(body);
  try {
    await connect();
    await newPost.save();
    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    throw new Error(err, { status: 500 });
  }
};
