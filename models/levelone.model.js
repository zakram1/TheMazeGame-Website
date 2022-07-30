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
{ collection: 'levelone' }
);

const LevelOne = mongoose.model('LevelOne', levelSchema);

module.exports = LevelOne;