const mongoose = require('mongoose');
const bycrypt = require('bcryptjs');
const newAdmin = new mongoose.Schema({
    Fname:{
        type:String
    },
    Lname:{
        type:String
    },
    Gender:{
        type:String
    },
    Email:{
        type:String
    },
    Password:{
        type:String
    },
    Cnic:{
        type:String
    },
    Contact:{
        type:String
    }
})
newAdmin.pre('save',async function(next){
    if(this.isModified('Password')){
        this.Password = await bycrypt.hash(this.Password,12);
    }
    next();
})
module.exports = mongoose.model('admins',newAdmin);