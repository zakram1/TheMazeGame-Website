const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const levelSchema = new Schema({
    time: {
        type: Number,
    },
    moves: {
        type: Number,
    }
},
{ collection: 'levelfive' }
);

const LevelFive = mongoose.model('LevelFive', levelSchema);

module.exports = LevelFive;