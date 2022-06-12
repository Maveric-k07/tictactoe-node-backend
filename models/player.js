const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    nickname: {
        type: String,
        trim:true,
    }, 
    socketID: {
        type: String,
    },
    points: {
        type: Number,
        default: 0
    },
    playerType: {
        required: true,
        type: String,
    }
});

module.exports = PlayerSchema;