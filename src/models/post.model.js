const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;


// Only Admin Can create post -- see later user can post  handle Later 

// author: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
// }


// Notification or Comments see Later 


 // comments: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Comment',
    //     },
    // ],