const mongoose = require('mongoose')
const { text } = require('body-parser')
const ObjectId = mongoose.Types.ObjectId

const schema = new mongoose.Schema({
    
    name: {
        type: String,
        required: [true, `Yêu cầu 'name'!`],
        unique: true
    },
    address: {
        type: String,
        required: [true, `Yêu cầu 'address'!`]
    },
    description: {
        type: String,
        required: [true, `Yêu cầu 'description'!`]
    },
    price: {
        type: Number,
        required: [true, `Yêu cầu 'price'!`]
    },
    discountNumber: {
        type: Number,
        required: [true, `Yêu cầu 'discountNumber'!`]
    },
    roomNumber: {
        type: Number,
        required: [true, `Yêu cầu 'roomNumber'!`]
    },
    area: {
        type: Number,
        required: [true, `Yêu cầu 'area'!`]
    },
    picture: {
        type: String,
        required: [true, `Yêu cầu picture`]
        
    }

    //thêm trường discountNmumber, roomNumber, diện tích
})


module.exports = schema