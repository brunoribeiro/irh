const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {type: String, required: true},
    release_date: {
        type: String, required: true, set: function (v) {
            return new Date(v);
        }
    },
    score: {type: Number, required: true, min: 0, max: 10},
    poster_url: {type: String, required: true},
    plot: {type: String, required: true},
    director: {type: String, required: true}
});

MovieSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
    }
});

module.exports = mongoose.model('Movie', MovieSchema);