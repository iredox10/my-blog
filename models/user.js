import mongoose from 'mongoose'

const user = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    favoriteBlogs: Array,
    isAdmin:{
        type: Boolean,
        default: false
    }
},{timestamp: true})

const User =mongoose.models.user || mongoose.model('user', user)

export default User