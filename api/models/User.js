const mongoose = require('mongoose')
const valid = require('validator')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type: String,
        trim: true,
        required: true
    },
    
    email: {
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
    password: {
        type: String
    }
})

const User = mongoose.model('User',userSchema)
module.exports = User