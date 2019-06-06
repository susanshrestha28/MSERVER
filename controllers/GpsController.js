var UserModel = require('../models/user');
var Records = require('../models/record');
exports.getLocations = async(req, res) => {
   console.log("hello");
   try{
    const result = await UserModel.findOne().exec();
    res.send(result)
} catch (err) {
    res.status(500).send(err)
}
}

exports.addData =  function(req, res) {
  console.log("Saving datas....")
        const record =new Records(req.body);
record.save();
        
    res.send(record)
}
