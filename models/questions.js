const mongoose=require('mongoose');


const questionSchema= mongoose.Schema({
    question:{
        type:String,
        require:true,
    },
    options:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Options'
    }]
},{
    timestmp:true,
});

const Questions= mongoose.model('Questions',questionSchema);

module.exports= Questions;