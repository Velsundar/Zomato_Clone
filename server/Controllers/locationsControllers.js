const Locations = require('../Models/location');

exports.getLocations = async (req,res)=>{
    try{
        const result =await Locations.find();
        res.status(200).json(result);
    }catch(err){
        res.status(500).send(err);
    }
}
exports.createLocation = async(req,res)=>{
    const newLocation = new Locations({
        name:req.body.name,
        city_id: req.body.city_id,
        location_id: req.body.location_id,
        country_name: req.body.country_name
    });
    try{
        const a= await newLocation.save();
        res.status(200).json(a);
    }catch(err){
        res.status(500).send(err);
    }
};
exports.updateLocationj = async (req,res)=>{
    const Locatio = await Locations.findById(req.params.id);
    try{
        if(req.body.name){
                location.name = req.body.name;
            }
        if(req.body.city_id){
            location.city_id =req.body.city_id;
        }
        if(req.body.location_id){
            location.location_id = req.body.location_id;
        }
        if(req.body.coutry_name){
            location.Country_name = req.body.country_name;
        }
        const a=await location.save()
        res.status(200).json(a);
        }catch(err){
            res.status(500).send(err);
        }
    };
    exports.deleteLocation = async(req,res)=>{
        const location = await Locations.findById(req.params.id);
        try{
            const d = await location.remove();
            res.status(200).json(d);
        }catch(err){
            res.status(500).send(err);
        }
    }
