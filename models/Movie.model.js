const { Schema, model } = require('mongoose');

const movieSchema = new Schema({
    title: {
        type: String,
        minlength: 1,
        required: true,
    },
    genre: String,
    plot: String,
    cast: [{
        type: Schema.Types.ObjectId,
        ref: "Celebrity"

    }]
});

module.exports = model('Movie', movieSchema);