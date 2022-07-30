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
{ collection: 'levelthree' }
);

const LevelThree = mongoose.model('LevelThree', levelSchema);

module.exports = LevelThree;