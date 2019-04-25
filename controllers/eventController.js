const express = require('express');
const router = express.Router();
const Event = require('../models/event');
const mongoose = require('mongoose');


router.get('/', async (req, res) => {
    try {
        const foundEvent = await Event.find({});
    res.render('event/index.ejs', {
        events: foundEvent
    });
    } catch (err) {
        res.send(err)
    }
});


router.get('/event/new', (req, res) => {
    res.render('event/new.ejs')
});

router.get('/:id', async (req, res) => {
    try {
        const allEvent = await Event.findById(req.params.Id)
        res.render('event/edit.ejs', {
            event: allEvent
        });
    } catch (err){
        console.log(err);
        res.send(err);
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
        const foundEvent = await Event.findById(req.params.Id)
        res.render('event/edit.ejs', {
            event: foundEvent
        })
    } catch (err) {
        res.send(err)
    }
});

router.put('/:id', async (req, res) => {
    try{
        const updateEvent = await Event.findByIdAndUpdate(req.params.id);
        res.redirect('/event')
    } catch (err) {
        res.send(err)
    }
});




router.delete('/:id', async (req, res) => {
    try{
        const foundEvent = await Event.findByIdAndDelete(req.params.id);
        const deleteEvent = await Event.findOne({'event': req.params.id})
        
        res.redirect('/event')
    } catch (err) {
        res.send(err);
    }
});






module.exports = router;
