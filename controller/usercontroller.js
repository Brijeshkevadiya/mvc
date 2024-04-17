var user = require('../model/usermodel');
var city = require('../model/citymodel');

exports.insert = async (req,res) => {
    var data = await user.create(req.body);

    res.status(200).json({
        status:"data insert"
    })
}

exports.city_insert = async (req, res) => {
    var data = await city.create(req.body);

    res.status(200).json({
        status: "data insert"
    })
}

exports.get_city = async (req, res) => {
    var data = await city.find();

    res.status(200).json({
        data
    })
}

exports.get_data = async (req, res) => {

    var limit=3;
    var total_data = await user.find().count();
    var page_no = req.query.page_no;
    if(page_no==undefined)
    {
        page_no=1;
    }

    var total_page = Math.ceil(total_data/limit);

    var start = (page_no-1)*limit;

    var data = await user.find().limit(limit).skip(start).populate("city_id");

    res.status(200).json({
        status: "data select",
        total_page,
        page_no,
        data
        
    })
}

exports.update_data = async (req, res) => {

    var id = req.params.id;

    var data = await user.findByIdAndUpdate(id,req.body);

    res.status(200).json({
        status: "data update",
    })
}

exports.delete_data = async (req, res) => {

    var id = req.params.id;

    var data = await user.findByIdAndDelete(id);

    res.status(200).json({
        status: "data Deleted",
    })
}               

exports.function_demo = async (req, res) => {

    var id = req.params.id;

    // var data = await user.find().count();
    // var data = await user.find().limit();
    // var data = await user.find().skip();



    res.status(200).json({
        status: "data update",
    })
}
