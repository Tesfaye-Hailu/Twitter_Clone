const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    
    email:{type: String},
    password:{type: String},
    confirmPassword: String
},

{timestamps: true}
);

const User = mongoose.model('User', userSchema);

module.exports = User;

