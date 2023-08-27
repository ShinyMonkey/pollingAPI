const mongoose=require('mongoose');

const optionsSchema= mongoose.Schema({
    text:{
        type:String,
        require:true,
    },
    votes:{
        type:Number,
        default:0,
    },
    link_to_votes:{
        type:String,
        // require:true,s
    },
    question:{
        type: mongoose.Schema.Types.ObjectId,
        require:true,
    }
});

const Options=mongoose.model('Options',optionsSchema);

module.exports=Options;