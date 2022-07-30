const router = require('express').Router();
const LevelOne = require('../models/levelone.model');
const LevelTwo = require('../models/leveltwo.model');
const LevelThree = require('../models/levelthree.model');
const LevelFour = require('../models/levelfour.model');
const LevelFive = require('../models/levelfive.model');

router.route('/leveloneapi').get((req, res) => {
    LevelOne.find().sort({time: 1}).limit(10)
        .then(levels => res.json(levels))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/leveltwoapi').get((req, res) => {
    LevelTwo.find().sort({time: 1}).limit(10)
        .then(levels => res.json(levels))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/levelthreeapi').get((req, res) => {
    LevelThree.find().sort({time: 1}).limit(10)
        .then(levels => res.json(levels))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/levelfourapi').get((req, res) => {
    LevelFour.find().sort({time: 1}).limit(10)
        .then(levels => res.json(levels))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/levelfiveapi').get((req, res) => {
    LevelFive.find().sort({time: 1}).limit(10)
        .then(levels => res.json(levels))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;