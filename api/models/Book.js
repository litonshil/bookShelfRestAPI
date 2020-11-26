const mongoose = require('mongoose')
const Schema = mongoose.Schema
const valid = require('validator')

const bookSchema = new Schema({
    name:{
        type: String,
        trim: true,
        required: true
    },
    author:{
        type: String,
        trim: true,
        required: true
    },
    authorEmail: {
        type: String,
        trim: true,
        required: true,
        validate: {
            validator: (v) => {
                return valid.isEmail(v)
            },
            message: `{VALUE} is not an email`
        }
    },
    publication:{
        type: String,
        trim: true,
        required: true
    }

})

const Book = mongoose.model('Book',bookSchema)
module.exports = Book