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
{ collection: 'levelfour' }
);

const LevelFour = mongoose.model('LevelFour', levelSchema);

module.exports = LevelFour;