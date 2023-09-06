import User from "@/models/user";
import connectMongoose from "@/utils/mongoConnect";
import { NextResponse } from "next/server";


const signJwt = (user) => {
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
    return token
}

export async function GET(){
    try{
    return NextResponse.json('hello')

    }catch(err){
        return NextResponse.json(err)
    }
}

export async function POST(request){
    connectMongoose()
    const {fullName,username,password,isAdmin} = await request.json()
    try {
        const user = await User.create({fullName,username,password,isAdmin})   
        user && signJwt(user)
        return NextResponse.json(user)
    } catch (err) {
        return NextResponse.json(err)   
    }
}