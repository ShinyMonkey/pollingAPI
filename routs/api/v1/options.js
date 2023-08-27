const express=require('express');

const router=express.Router();
const optionsController = require('../../../controller/api/v1/options');

router.post('/create/:id',optionsController.create);
router.delete('/delete/:id',optionsController.delete);
router.post('/add_vote/:id',optionsController.addVote);

module.exports=router;