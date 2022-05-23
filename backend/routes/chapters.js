const router = require('express').Router();
let Chapter = require('../models/chapter.model');

router.route('/').get((req, res) => {
    Chapter.find()
        .then(chapters => res.json(chapters))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const chapterName = req.body.chapterName;
    const subject = req.body.subject;
    const section = req.body.section;
    const image = req.body.image;
    const index = req.body.index;

    const newChapter = new Chapter({ chapterName, subject, section, image, index });

    newChapter.save()
        .then(() => res.json('Chapter added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Chapter.findById(req.params.id)
        .then(chapter => res.json(chapter))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Chapter.findByIdAndDelete(req.params.id)
        .then(() => res.json('Chapter deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Chapter.findById(req.params.id)
        .then(chapter => {
            chapter.chapterName = req.body.chapterName;
            chapter.subject = req.body.subject;
            chapter.section = req.body.section;
            chapter.image = req.body.image;
            chapter.index = req.body.index;

            chapter.save()
                .then(() => res.json('Chapter updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;