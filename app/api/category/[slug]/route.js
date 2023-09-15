import Category from "@/models/category"
import connectMongoose from "@/utils/mongoConnect"
import { NextResponse } from "next/server"


export async function DELETE(request,{params}){
    await connectMongoose()
    const slug = params.slug
     try {
         const category = await Category.findOne({slug:slug})
         return NextResponse.json({category})
     } catch (err) {
         return NextResponse.json(err.message)
     }
 }