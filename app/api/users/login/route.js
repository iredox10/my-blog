import connectMongoose from "@/utils/mongoConnect"
import { NextResponse } from "next/server"
import jwt from 'jsonwebtoken'
import User from '@/models/user'
// const signJwt = (user) => {
//     const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
//     return token
// }

export async function POST(request,{params}){
    connectMongoose()
    try {
        const {username,password} = await request.json()
        // const user = await User.findOne({username})
        // return NextResponse.json(user)
        console.log(username,password)
    } catch (err) {
        // return NextResponse.json(err.message)
        console.log(err)
    }
}

