const express= require('express');
const { HomeController } = require('../controller/HomeController');
const router= express.Router();

router.route('/home').post(HomeController).get((req,res)=>{
    res.status(401).send({
        msg:"plese use POST method to test the api route"
    })
});
module.exports=router;