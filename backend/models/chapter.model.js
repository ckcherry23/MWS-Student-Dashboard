const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chapterSchema = new Schema({
    chapterName: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});

const Chapter = mongoose.model('Chapter', chapterSchema);

module.exports = Chapter;