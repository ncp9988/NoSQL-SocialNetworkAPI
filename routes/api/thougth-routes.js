const routes = require('express').Router();
// const { Router } = require('express');
const { Thought } = require('../../models');

routes.get("/", (req, res) => {
    Thought.find().select('-__v')
        .then(allthoughts => res.json(allthoughts))
        .catch(error => res.status(500).json(error));

});
routes.get("/:thoughtId", (req, res) => {
    Thought.findOne({ _id: req.params.thoughtId }).select('-__v')
        .then(allthoughts => res.json(allthoughts))
        .catch(error => res.status(500).json(error));

});

routes.post("/", (req, res) => {
    console.log("post",req.body)
    Thought.create({thoughtText:req.body.thoughText, username: req.body.username})
        .then(allthoughts => res.json(allthoughts))
        .catch(error => {
            console.log(error)
            res.status(500).json(error)});

});

routes.put("/:thoughtId", (req, res) => {
    Thought.findOneAndUpdate({ _id: req.params.thoughtId },
        { $set: req.body }, { new: true })
        .then(allthoughts => res.json(allthoughts))
        .catch(error => res.status(500).json(error));

});

routes.delete("/:thoughtId", (req, res) => {
    Thought.findOneAndDelete({ _id:req.params.thoughtId })
    .then(allthoughts =>  res.json(allthoughts))
    .catch(error => res.status(500).json(error));
   
   });

module.exports = routes;

