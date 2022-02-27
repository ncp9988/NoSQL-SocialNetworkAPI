const routes = require('express').Router();
const { Router } = require('express');
const { Thought } = require('../../models');

Router("/", (req, res) => {
    Thought.create(req.body)
    .then(allthoughts => res.json(allthoughts))
    .catch(error => res.status(500).json(console.error));

});