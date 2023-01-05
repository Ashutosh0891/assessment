const mongoose = require('mongoose');
const { Schema } = mongoose;

const BooksSchema = new Schema({
   
    title: {
        type: String,
        require: true
    },
    isbn: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true,
        

    },
    description: {
        type: String,
        require: true,
        

    }

});

module.exports = mongoose.model('books', BooksSchema);