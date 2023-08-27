const express=require('express');

const router=express.Router();


router.use('/api',require('./api'))

console.log('router active');
module.exports=router;