import Blog from "@/models/blog";
import connectMongoose from "@/utils/mongoConnect";
import { NextResponse } from "next/server";

export async function GET(){
    connectMongoose()
    try{
        const blogs = await Blog.find()
        return NextResponse.json(blogs)
    }catch(err){
        return NextResponse.json(err.message)
    }
}