const Users = require('../Models/LoginModals');

exports.getUsers = async (req,res)=>{
    try{
        const result =await Users.find();
        res.status(200).json(result);
    }catch(err){
        res.status(500).send(err);
    }
}
exports.createUsers = async(req,res)=>{
    const newUser = new Users({
        Username:req.body.Username,
        Email: req.body.Email,
        password: req.body.password,
    });
    const verify = Users.find({Email:req.body.Email});
    let result = true;
    if(verify.length>0){
        result=false;
    }else{
        const user1 = await newUser.save();
        result=true;
    }
    try{
        res.status(200).json(result);
    }catch(err){
        res.status(500).send(err);
    }
};

exports.Login = async(req,res)=>{
    const payload ={
    Username: req.body.Username,
    Password: req.bosy.Password
}
//Find username and password in the database
const verify =await userInfo.find(payload);
console.log(verify);
//if username and password is correct then send
if(verify.length >0){
    result=true;
}
//Otherwise send false to frontend
else{
    result=false;
}try{
    res.status(200).json(verify);
}catch(err){
    res.send(err)
}
}