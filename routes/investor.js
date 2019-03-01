const express = require('express');
const path = require('path');
const router = express.Router();

//front-page
router.get('/investor',(req, res)=>{
   res.render('pages/investor/index');

});
//registering
router.get('/register/investor',(req,res)=>{
        res.render('pages/register/investor');
});

//log in
router.get('/login/investor',(req,res)=>{
        res.render('pages/login/investor/index');
});

module.exports = router;