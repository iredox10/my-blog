import connectMongoose from "@/utils/mongoConnect"
import { NextResponse } from "next/server"
import jwt from 'jsonwebtoken'
import User from '@/models/user'

const signJwt = (user) => {
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
    return token
}

export async function POST(request,{params}){
    connectMongoose()
    const {username,password} = await request.json()
    try {
        const user = await User.findOne({username})
        if(!user){
            return NextResponse.json({message:"User not found"})
        } 
        if(user.password !== password){
            return NextResponse.json({message:"Password is incorrect"})
        } 
        const token = signJwt(user)
        return NextResponse.json({user,token})
    } catch (err) {
        return NextResponse.json(err.message)
    }
}

