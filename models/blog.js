import mongoose from 'mongoose'
import slug from 'slug'

const blog = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    slug: String,
    subtitle: String,
    summary: String,
    image: String,
    blog: {
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    }
}, {timestamps: true})

blog.pre('save', function(){
    if(this.title){
        this.slug = slug(this.title, {lower: true,replacement: '-'})
    }
})

const Blog =mongoose.models.blog || mongoose.model('blog', blog)

export default Blog