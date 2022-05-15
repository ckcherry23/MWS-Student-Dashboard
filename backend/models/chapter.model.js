const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chapterSchema = new Schema({
    chapterName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minlength: 2,
    }
}, {
    timestamps: true,
});

const Chapter = mongoose.model('Chapter', chapterSchema);

module.exports = Chapter;