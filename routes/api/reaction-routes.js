const routes = require('express').Router();
const { Reaction } = require('../../models/');

routes.post("/", (req, res) => {
    Reaction.create(req.body)
    .then(allreactions =>  res.json(allreactions))
    .catch(error => res.status(500).json(error));
   
   });


routes.delete("/:reactionId", (req, res) => {
    Reaction.findOneAndDelete({ _id:req.params.reactionId })
    .then(allreactions =>  res.json(allreactions))
    .catch(error => res.status(500).json(error));
   
   });


module.exports = routes;
