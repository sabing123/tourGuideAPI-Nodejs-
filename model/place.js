const mongoose = require ('mongoose');


const PlaceSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    }
    
    },{timestamps:true});

module.exports = mongoose.model('Place',PlaceSchema);