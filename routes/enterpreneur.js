const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/get-funded',(req, res)=>{
    /*
    dependency --> Get funded and register
    */
   res.render('pages/get_funded/index');

});

router.get('/form/get-funded',(req,res)=>{
    res.render('pages/get_funded/form/index');
});


/*
Enterpreneur Registers
*/
router.get('/register/enterpreneur/:id',(req,res)=>{
    let id = req.params.id;
    /*
    To render 3 pages of the enterpreneurs register
    */
    if(id === "1" || id==="2" || id==="3") {
        let page_path = `page_${id}`;
        res.render(`pages/register/enterpreneur/${page_path}/index`);
    }
    
});

/*
Enterpreneur Logins
*/
router.get('/login/enterpreneur',(req,res)=>{
    res.render('pages/login/enterpreneur/index');
});
module.exports = router;