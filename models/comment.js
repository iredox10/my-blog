import mongoose from 'mongoose'

const comment = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
}, {timestamps: true})

const Comment = mongoose.models.comment || mongoose.model('comment', comment)

export default Comment

