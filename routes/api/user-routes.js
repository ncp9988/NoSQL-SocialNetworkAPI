const routes = require('express').Router();
const { User } = require('../../models/');

routes.get("/", (req, res) => {
    console.log('get route')
 User.find().select('-__v')
 .then(allusers =>  res.json(allusers))
 .catch(error => res.status(500).json(error));

});

routes.get("/:userId", (req, res) => {
    User.findOne({ _id:req.params.userId}).select('-__v')
    .then(allusers =>  res.json(allusers))
    .catch(error => res.status(500).json(error));
   
   });

routes.post("/", (req, res) => {
    console.log("post",req.body)
    User.create(req.body)
    .then(allusers =>  res.json(allusers))
    .catch(error => res.status(500).json(error));
   
   });

routes.put("/:userId", (req, res) => {
    User.findOneAndUpdate({ _id:req.params.userId }, 
        {$set: req.body},{new:true})
    .then(allusers =>  res.json(allusers))
    .catch(error => res.status(500).json(error));
   
   });

routes.delete("/:userId", (req, res) => {
    User.findOneAndDelete({ _id:req.params.userId })
    .then(allusers =>  res.json(allusers))
    .catch(error => res.status(500).json(error));
   
   });

routes.post("/:userId/friends/:friendId", (req, res) => {
    User.findOneAndUpdate({ _id:req.params.userId }, {$addToSet:{friends:req.params.friendId}},{new:true})
    .then(allusers =>  res.json(allusers))
    .catch(error => res.status(500).json(error));
   
});

routes.put("/:userId/friends/:friendId", (req,res) => {
    User.findOneAndUpdate({ _id:req.params.userId }, 
        {$pull:{friends:{friendId:req.params.friendId}}},{new: true})
    .then(allusers =>  res.json(allusers))
    .catch(error => res.status(500).json(error));
   
});

// bonus
routes.delete("/:userId/thought/:thoughtId", (req,res) => {
    User.findOneAndDelete({ _id:req.params.thoughtId })
    .then(allusers =>  res.json(allusers))
    .catch(error => res.status(500).json(error));
   
});


module.exports = routes;
