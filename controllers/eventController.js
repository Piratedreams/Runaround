const express = require('express');
const router = express.Router();
const Event = require('../models/event');


router.get('/', (req, res) => {
    res.render('event/index.ejs')
});

router.get('/:id', async (req, res) => {
    try {
        const foundEvent = await Event.find({})
        res.render('event/show.ejs', {
            events: foundEvent
        });
    } catch (err){
        res.send(err);
    }
});

router.get('/new', async (req, res) => {
    try {
        const foundEvent = await Event.find({})
        res.render('event/new.ejs')
    } catch (err) {
        res.send(err)
    }
});

router.post('/event', async (req, res) => {
    try {
        const createdEvent = await Event.create(req.body);
        res.redirect('/event');
    } catch (err) {
        res.send(err)
    }
});



router.get('/:id/edit', async (req, res) => {
    try {
        const foundEvent = await Event.findById(req.params.id)
        res.render('event/edit.ejs', {
            event: foundEvent
        })
    } catch (err) {
        res.send(err)
    }
});

router.put('/:id', async (req, res) => {
    try{
        const updateEvent = await Event.findByIdAndUpdate(req.params.id, {new: true});
        res.redirect('/event')
    } catch (err) {
        res.send(err)
    }
});




router.delete('/:id', async (req, res) => {
    try{
        const deletedEvent = await Event.delete(req.params.id);
        res.redirect('/event')
    } catch (err) {
        res.send(err);
    }
});






module.exports = router;
