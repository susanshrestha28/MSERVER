var UserModel = require('../models/user');
var Records = require('../models/record');
var BusModel = require('../models/bus');
var DatasModel = require('../models/datas');
var email
var password 
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
   try{
     const result = await DatasModel.find({}).exec()
     console.log(result[0].email)
     console.log(result[0].password)
     console.log(result[0].firstName)
     console.log(result[0].profilePic)
    //  if(String(result[0].email) == String(email) && String(result[0].password) == String(password)){
    //      console.log('user matched');
    //      var json = [{status:'okay'}];
    //  }else{
    //      var json = [{staus:'bad'}];
    //  }
    //  res.send(json)
    res.send(result);
 } catch (err) {
     res.status(500).send(err);
 }
 }

exports.addData =  function(req, res) {
  console.log("Saving datas....")
        const record =new Records(req.body);
record.save();
        
    res.send(record)
}

exports.datas =  function(req, res) {
    console.log("Saving datas send from aurdinogprs ....")
    console.log(req.body.email);
    console.log(req.body.password);
    email = req.body.email;
    password = req.body.password
      //    const record =new DatasModel(req.body);
  //record.save();
          
    //  res.send(record)
  }