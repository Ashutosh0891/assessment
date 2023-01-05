const mongoose = require('mongoose');
const { Schema } = mongoose;
const MagazineSchema = new Schema({
   
    title: {
        type: String,
        require: true
    },
    isbn: {
        type: String,
        require: true
    },
    authors: {
        type: String,
        require: true,
       

    },
    publishedAt: {
        type: String,
        require: true,
    }
});

module.exports = mongoose.model('magazines', MagazineSchema);