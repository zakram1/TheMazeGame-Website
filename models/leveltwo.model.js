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
{ collection: 'leveltwo' }
);

const LevelTwo = mongoose.model('LevelTwo', levelSchema);

module.exports = LevelTwo;