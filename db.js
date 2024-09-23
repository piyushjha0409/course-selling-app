//this for connecting the database 
const mongoose = require('mongoose')
const { setSyntheticTrailingComments } = require('typescript')

//making schemas 
const UserModel = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    firstName: String,
    lastName: String,
    password: String
});

//admin schema 
const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    firstName: String,
    lastName: String,
    password: String
});



const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    createrId: mongoose.ObjectId
})


const purchaseSchema = new mongoose.Schema({
    userId: mongoose.ObjectId,
    courseId: mongoose.ObjectId
})



const userModel = mongoose.model('User', UserModel)
const adminModel = mongoose.model('admin', adminSchema)
const courseModel = mongoose.model('course', courseSchema)
const purchaseModel = mongoose.model('purchase', purchaseSchema)

module.exports = {
    userModel, 
    adminModel,
    courseModel,
    purchaseModel
}

