const routes = require('express').Router();
const { Router } = require('express');
const { Thought } = require('../../models');

routes.get("/", (req, res) => {
    thought.find().select('-__v')
    .then(allthoughts =>  res.json(allthoughts))
    .catch(error => res.status(500).json(error));
   
   });
routes.get("/:thoughtId", (req, res) => {
    Thought.findOne({ _id:req.params.userId}).select('-__v')
    .then(allthoughts =>  res.json(allthoughts))
    .catch(error => res.status(500).json(error));
   
   });
