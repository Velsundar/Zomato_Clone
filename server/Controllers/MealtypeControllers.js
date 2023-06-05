const Mealtypes = require('../Models/MealTypesModels');

exports.getMealtypes = async (req,res)=>{
    const result = await Mealtypes.find();
    try{
        res.status(200).json(result);
    }catch(err){
    res.status(500).send(err);
    }
}
