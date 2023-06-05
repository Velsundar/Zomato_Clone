const Restaurant =require ('../Models/Restaurants.js');

exports.getRestaurants = async (req,res)=>{
    try{
        const result =await Restaurant.find();
        res.status(200).json(result);
    }catch(err){
        res.status(500).send(err);
    }

}
exports.getrestaurantsByLocation = async(req,res)=>{
        const byLocation = await Restaurant.find({location_id : req.params.id})
        try{
            res.status(200).json(byLocation);
    }catch(err){
        res.status(500).send(err);
    }
}
exports.getRestaurantsById = async(req,res)=>{
    const byId =await Restaurant.findById(req.params.id)
    try{
        res.status(200).json(byId);
    }catch(err){
        res.send(500).send(err);
    }
}

exports.filter = async(req,res)=>{
    const mealtype_id = req.body.mealtype_id;
    const location_id = req.body.location_id;
    const cuisine_id = req.body.cuisine_id;
    const hcost = req.body.hcost;
    const lcost = req.body.lcost;
    const sort = req.body.sort ? req.body.sort :1;
    const page = req.body.page ? req.body.page :1;
    let itemperPage = 2;
    let startIndex = (page*itemperPage) - itemperPage;
    let endIndex = (page* itemperPage);


let payload={};

if(mealtype_id){
    payload ={mealtype_id:{$elemMatch: {mealtype: mealtype_id}}};
}
if(mealtype_id && location_id){
    payload = {
        mealtype_id:{$elemMatch:{mealtype:mealtype_id}},
        location_id: location_id
    }
}
if(mealtype_id && cuisine_id){
    payload={
        mealtype_id:{$elemMatch:{mealtype: mealtype_id}},
        cuisine_id:{$elemMatch:{cuisine: cuisine_id}},
    }
}
if(mealtype_id && hcost && lcost){
    payload={
        mealtype_id:{$elemMatch:{mealtype: mealtype_id}},
        const: {$lte:hcost, $gte:lcost}
    }
}
if(mealtype_id && cuisine_id && hcost && lcost){
    payload = {
        mealtype_id: {$elemMatch:{mealtype:mealtype_id}},
        cost:{$lte:hcost,$gte:lcost},
        cuisine_id:{$elemMatch:{cuisine:cuisine_id}},
    }
}
if(mealtype_id && location_id && cuisine_id){
    payload={
        mealtype_id: {$eleMatch:{mealtype:mealtype_id}},
        location_id: location_id,
        cusine_id:{$elemMatch:{cuisine:cuisine_id}}
    }
}
if(mealtype_id && location_id && hcost && lcost){
    payload={
        mealtype_id: {$elemMatch:{mealtype: mealtype_id}},
        location_id: location_id,
        cost: {$lte:hcost, $gte:lcost}
    }
}
if(mealtype_id && location_id && cuisine_id && hcost && lcost){
    payload={
        mealtype_id:{$elemMatch:{mealtype: mealtype_id}},
        location_id: location_id,
        cost : {$lte:hcost,$gte:lcost},
        cuisine_id:{$elemMatch:{cuisine:cuisine_id}}
    }
}
let list = await Restaurant.find(payload).sort({cost:sort});
try{
    res.status(200).json(list);
}catch(err){
    res.status(500).send(err);
}
}
