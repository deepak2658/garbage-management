//importing models
const DriverDetails = require('../model/driver-details');
const Feedback = require('../model/feedback');

exports.gethome = (req,res,next)=>{
    res.render('home.pug');
};

exports.getcontact = (req,res,next)=>{
    res.render('contact.pug');
};

exports.getabout = (req,res,next)=>{
    res.render('aboutnew.pug');
};

exports.getlogin_of_drivers = (req,res,next)=>{
    res.render('login_of_drivers.pug');
};

exports.getourwork = (req,res,next)=>{
    res.render('ourwork.pug');
};

exports.getdetail = (req,res,next)=>{
       DriverDetails.findAll().then(details => {
        console.log(details);
        res.render('Details.pug',{driverDetails :details,
        pageTitle : 'Driver_Details'});
    }).catch(err=>console.log(err));

   
};

exports.getthreetrucks = (req,res,next)=>{
    res.render('threetruck.pug',{pageTitle:'Live_Location'});
};

exports.redirect = (req,res,next)=>{
    res.redirect('/home');
}

exports.SubmitFeedback = (req,res,next)=>{
        const name = req.body.Name;
        const email = req.body.Email;
        const subject = req.body.Subject;
        const message = req.body.Message;
        console.log(name,email,subject,message);
        Feedback.create({name: name,email : email,Subject:subject,message:message});
        res.send('<h1>Thanks for your valuable feedback</h1>');
}; 