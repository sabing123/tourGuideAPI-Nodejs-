const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    firstname:{type:String,require:true},
    lasttname:{type:String,require:true},
    username:{type:String,require:true},
    password:{type:String,require:true},
    address:{type:String,require:true},
    dateofbirth:{type:String,require:true},
    gender:{type:String,require:true},
    image:{type:String,require:true}
},{timestamps:true});

module.exports = mongoose.model('User', UserSchema);