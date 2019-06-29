var UserModel = require('../models/user');
var Records = require('../models/record');
var BusModel = require('../models/bus')
exports.getLocations = async(req, res) => {
   console.log("hello");
   try{
    const result = await UserModel.find().exec();
   
    res.send(result)
   
    
} catch (err) {
    res.status(500).send(err)
}
}
exports.getBuses = async(req, res) => {
    console.log("hi");
   try{
     const result = await BusModel.find({}).exec()
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
