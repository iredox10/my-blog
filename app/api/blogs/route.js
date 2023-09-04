import Blog from "@/models/blog";
import Category from "@/models/category";
import connectMongoose from "@/utils/mongoConnect";
import { NextResponse } from "next/server";

export async function POST(request,{params}){
    const id = params.id
    const {title,blog,summary,} = request.json()
    await connectMongoose()
    try {
    const category = await Category.findById({_id:id})
    const blog = await Blog.create({title,subtitle,summary,blog,author,})  
    } catch (err) {
        return NextResponse.json(err)
    }   
}

export async function GET (){
    connectMongoose()
    try{
        // const blogs = await Blog.find()
        return NextResponse.json('hello')
    }catch(err){
        return NextResponse.json(err)
    }
}