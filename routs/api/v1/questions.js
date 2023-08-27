const express=require('express');

const router=express.Router();
const questionsController=require('../../../controller/api/v1/questions');

router.post('/create',questionsController.create);
router.get('/index',questionsController.index);
router.delete('/delete/:id',questionsController.delete);

module.exports=router;