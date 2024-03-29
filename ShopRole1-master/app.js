const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const app = express();
const ejs=require('ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.static("upload"));
const cookieSession=require('cookie-session');
const googleSetup=require('./utils/googlepassport');
const passport =require('passport');
const session=require("express-session");
app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:['thisismagiccode']
}));
 app.use(passport.initialize());
app.use(passport.session());
app.use('/',require('./api/adminApis/adminapi'));
app.use('/product',require('./api/adminApis/productApi'));
app.use('/deal',require('./api/adminApis/dealApi'));
app.use('/customer',require('./api/customer/customerproductapi'));
app.use('/login',require('./api/customer/customerRoutes'));
app.use('/deliveryboy',require('./api/deliveryBoy/deliveryBoyApi'));


const authCheck = (req,res,next)=> {
    if(!req.user) {
        res.redirect('/');
    }
    else {
        next();
    }
}

app.listen(process.env.PORT || 1234 , (err)=> {
    if(err) {
        console.log("Error while loading the backend server at 1234");
    }
    else {
        const config = require('./utils/config');
        const adminOperations = require("./db/helpers/admin/adminOperations");
        adminOperations.findAdmin(config.ADMIN);
        console.log("Server started successfully");
    }
});