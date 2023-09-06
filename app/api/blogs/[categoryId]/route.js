import Blog from "@/models/blog";
import Category from "@/models/category";
import connectMongoose from "@/utils/mongoConnect";
import { NextResponse } from "next/server";

export async function POST(request,{params}){
    await connectMongoose()
    const id = params.categoryId
    const {title,subtitle,blog,summary,author} = await request.json()
    try {
    const category = await Category.findOne({slug:id})
    const newBlog = await Blog.create({title,subtitle,summary,blog,author,category:category._id})  
    category.blogs.push(newBlog)
    category.save()
    return NextResponse.json({newBlog,category}, {status:201})
    // return NextResponse.json({req: })
    } catch (err) {
        return NextResponse.json(err.message,{status: 400})
    }   
}

export async function GET (request,{params}){
    connectMongoose()
    const slug = params.categoryId
    try{
        const category = await Category.findOne({slug: slug}).populate('blogs')
        // const blogs = category.blogs
        return NextResponse.json(category)
    }catch(err){
        return NextResponse.json(err)
    }
}
