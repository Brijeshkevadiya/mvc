var mongoose = require('mongoose');

var userschema = mongoose.Schema({
    city_name: {
        type: String
    },
});

module.exports = mongoose.model("cat",userschema);