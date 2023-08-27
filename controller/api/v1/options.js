const Questions=require('../../../models/questions');
const Options=require('../../../models/options');


module.exports.create= async function(req,res){
    try {
        let queston= await Questions.findById(req.params.id);
        if(queston){
            let option=await Options.create({
                text: req.body.text,
                question: req.params.id,
            });
            
            // for adding a link 
            await Options.findOneAndUpdate({_id:option._id},{ $set: { link_to_votes:  `localhost:8000/api/v1/options/add_vote/${option.id}` } })
            queston.options.push(option);
            queston.save();
            return res.json(200,{
                message:"option Created",
                
            })
        }else{
            return res.json(401,{
                message:"Question not found",
                
            })
        }
    } catch (error) {
        console.log(error,"****Error*******");
        return res.json(500,{
            message:"Invalid Server Error",
            
        })
    }
}


// deleteing an option

module.exports.delete= async function(req,res){
    try {
        let option= await Options.findById(req.params.id);
        if(option){
            option.deleteOne();
            await Questions.findOneAndUpdate({_id:option.question},
                { $pull:{options:{_id:req.params.id}}
                });
                return res.json(200,{
                    message:"Options is Deleted",
                    
                });

        }else{
            return res.json(401,{
                message:"Option not found",
                
            });
        }
    } catch (error) {
        console.log(error,"****Error*******");
        return res.json(500,{
            message:"Invalid Server Error",
            
        })
    }
}


// add votes
module.exports.addVote=async function(req,res){
    try {
        await Options.findOneAndUpdate({_id:req.params.id},{
            $inc:{votes:1}
          });
          return res.json(200,{
            message:"Got the option",

          })    
    } catch (error) {
        console.log(error,"****Error*******");
        return res.json(500,{
            message:"Invalid Server Error",
            
        });
    }
}