var mongoose = require('mongoose');

var userschema = mongoose.Schema({
    name:{
        type:String
    },
    city_id:{
        type: mongoose.Types.ObjectId, 
        ref: 'cat'
    }
});

 module.exports = mongoose.model("user",userschema);