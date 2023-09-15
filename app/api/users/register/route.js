import User from "@/models/user";
import connectMongoose from "@/utils/mongoConnect";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

const signJwt = (user) =>{
    return jwt.sign({id:user._id}, process.env.JWT_SECRET)
}


export async function POST(request,{params}){
    connectMongoose()
    const {fullName,username,password,isAdmin} = await request.json()
    try {
        const user = await User.create({fullName,username,password,isAdmin})
       const jwt = signJwt(user)
        return NextResponse.json({user,jwt})
    }catch(err){
        if(err.code === 11000){
            return NextResponse.json({message:"Username already exists"})
        }
    return NextResponse.json(err.message)
    }
}