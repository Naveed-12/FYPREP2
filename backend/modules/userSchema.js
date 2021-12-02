const mongoose = require('mongoose');
const bycrypt = require('bcryptjs');
const newUser = new mongoose.Schema({
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
    },
    Status:{
        type:Boolean,
        default:true
    }
})
newUser.pre('save',async function(next){
    if(this.isModified('Password')){
        this.Password = await bycrypt.hash(this.Password,12);
    }
    next();
})
module.exports = mongoose.model('users',newUser);