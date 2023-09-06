import Blog from "@/models/blog";
import connectMongoose from "@/utils/mongoConnect";
import { NextResponse } from "next/server";

export async function GET(request,{params}){
    connectMongoose()
    const slug = params.slug
    try{
       const blog = await Blog.findOne({slug:slug})
       !blog && NextResponse.json('no blog')
       return NextResponse.json(blog)
    }catch(err){
       return NextResponse.json(err.message)
    }
}

export async function PUT(request,{params}){
    connectMongoose()
    const slug = params.slug
    try {
        const blog = await Blog.findOneAndUpdate({slug:slug},request.body,{new:true})
        return NextResponse.json(blog)
    } catch (err) {
        return NextResponse.json(err.message)
    }
}

export async function DELETE(request,{params}){ 
    connectMongoose()
    try {
        const blog = await Blog.findOneAndDelete({slug:params.slug})
        return NextResponse.json(blog)
    } catch (err) {
        return NextResponse.json(err.message)
    }
}