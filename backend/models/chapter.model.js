const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chapterSchema = new Schema({
    chapterName: { type: String, required: true },
    subject: { type: String, required: true },
    section: { type: String, required: true },
    image: { type: String, required: true },
    index: { type: Number, required: true },
}, {
    timestamps: true,
});

const Chapter = mongoose.model('Chapter', chapterSchema);

module.exports = Chapter;