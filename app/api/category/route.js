import Category from "@/models/category";
import connectMongoose from "@/utils/mongoConnect";
import { NextRequest, NextResponse } from "next/server";

// export async function GET (){
//     await connectMongoose()
//     const categories = await Category.find()
//     return NextResponse.json(categories)
// }

export async function GET(){
    return NextResponse.json('hello').status(300)
}

export async function POST (request){
    await connectMongoose()
    const {name,desc,shortName,color,logo} = await request.json()
    try {
        const category = await Category.create({name,desc,shortName,logo,color})
        return NextResponse.json(category)
    } catch (err) {
        return NextResponse.json(err)
    }
}