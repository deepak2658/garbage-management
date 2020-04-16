const driverDetails = require('../model/driver-details');

// exports.getadminpage = (req,res,next)=>{
//     res.render('Test.pug');
// };

exports.getadminpage = (req,res,next)=>{
    driverDetails.findAll().then(details => {
     res.render('Test.pug',{driverDetails :details,
     pageTitle : 'Driver_Details'});
 }).catch(err=>console.log(err));


};

exports.getadddriver = (req,res,next)=>{
    res.render('adddriver.pug'); 
};

exports.adddriver = (req,res,next)=>{
    name = req.body.driverName;
    no = req.body.number;
    place = req.body.place;
    age = req.body.age;
    driverDetails.create({driverName: name,phoneNumber : no, place:place,
    age:age});
    res.redirect('/admin');

};
