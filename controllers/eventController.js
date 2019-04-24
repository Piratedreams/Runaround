const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Runner = require('../models/runner');
const Event = require('../models/event');


router.get('/', (req, res) => {
    res.render('/event/index.ejs')
});

router.get('/:id', async (req, res) => {
    try {
        const foundEvent = await Event.find({})
        res.render('index.ejs', {
            events: foundEvent
        });
    } catch (err){
        res.send(err);
    }
});

router.post('/events', async (req, res) => {
    try {
        const createdEvent = await Event.create(req.body);
        res.redirect('/events');
    } catch (err) {
        res.send(err)
    }
});



router.get('/:id/edit', async (req, res) => {
    try {
        const foundEvent = await Event.findById(req.params.id)
        res.render('events/edit.ejs', {
            event: foundEvent
        })
    } catch (err) {
        res.send(err)
    }
});

router.put('/:id', async (req, res) => {
    try{
        const updateEvent = await Event.findByIdAndUpdate(req.params.id, {new: true});
        res.redirect('/events')
    } catch (err) {
        res.send(err)
    }
});




router.delete('/:id', async (req, res) => {
    try{
        const deletedEvent = await Event.delete(req.params.id);
        res.redirect('/events')
    } catch (err) {
        res.send(err);
    }
});






module.exports = router;
