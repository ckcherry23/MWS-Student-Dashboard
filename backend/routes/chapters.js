const router = require('express').Router();
let Chapter = require('../models/chapter.model');

router.route('/').get((req, res) => {
    Chapter.find()
        .then(chapters => res.json(chapters))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const chapterName = req.body.chapterName;
    const newChapter = new Chapter({chapterName});

    newChapter.save()
        .then(() => res.json('Chapter added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;