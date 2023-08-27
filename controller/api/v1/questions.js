const Questions=require('../../../models/questions');
const Options=require('../../../models/options');
module.exports.index=async function(req,res){
    try {
        let questions=await Questions.find({}).populate('options');
        return res.json(200,{
            message: 'All questions',
            questions: questions,
        });

    } catch (error) {
        console.log(error,"****Error*******");
        return res.json(500,{
            message:"Invalid Server Error",
            
        })
    }
}
module.exports.create=async function(req,res){
    try {
        await Questions.create({question:req.body.question});
        return res.json(200,{
            message: 'A question has been created'
        })

    } catch (error) {
        console.log(error,"****Error*******");
        return res.json(500,{
            message:"Invalid Server Error"
        })
    }
}


// deleteing questions

module.exports.delete= async function(req,res){
    try {
        let question=await Questions.findById(req.params.id);
        if(question){
            question.deleteOne();
            await Options.deleteMany({question:req.params.id});
            return res.json(200,{
                message:"Question and its Options are Deleted",
                
            });
        }else{
            return res.json(401,{
                message:"Question not found",
                
            });
        }
    } catch (error) {
        console.log(error,"****Error*******");
        return res.json(500,{
            message:"Invalid Server Error"
        })
    }
}