const User = require('../model/user');

exports.getlogin = (req,res,next)=>{
     res.render('login.pug');
};

exports.getdriverlogin = (req,res,next)=>{
    res.render('driverlogin.pug');
};

exports.getlogin_of_drivers = (req,res,next)=>{
    res.render('login_of_driver.pug');
};

exports.getregister = (req,res,next)=>{
    res.render('register.pug');
};

//this export is not working well contains gps display of the dustbins
exports.getmapbootsrap = (req,res,next)=>{
    emailreq = req.body.email;
    password = req.body.pass;
    //    
    //  console.log('userfound');
    // console.log(User.findAll({where : {email: emailreq }}));
    User.findAll({where : {email: emailreq }}).then(user=>{
        console.log();
        if(user[0]){
        if(user[0].dataValues.email == emailreq){
            if(user[0].dataValues.password == password)
            {
                res.render('mapsbootsrap.pug',{pageTitle:'Location Of Dustbins'});
            }
            else{
                res.send('<h1>incorect password</h1>');
            }
            
        }
        
    }
    else {res.send('<h1>User not Found</h1>');
    console.log('user not found');}
}).
    catch(err=>console.log(err));   
};

exports.addUser = (req,res,next)=>{
    username = req.body.user;
    email = req.body.email;
    password = req.body.pass;
    name = req.body.fullname;
    security_question  = req.body.sq;
    User.create({username : username,email : email,fullname:name, password : password,securityQuestion : security_question});
    res.redirect('/login1');  
};


