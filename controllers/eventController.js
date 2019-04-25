const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Event = require('../models/event');
const mongoose = require('mongoose');


router.get('/', async (req, res) => {
    try {
        const foundEvent = await Event.find({});
    res.render('event/index.ejs', {
        Event: foundEvent
    });
    } catch (err) {
        res.send(err)
    }
});

router.get('/new', async (req, res) => {
    res.render('event/new.ejs')
});

router.post('/', async (req, res) => {
    try {
        const createdEvent = await Event.create(req.body);
        console.log(createdEvent);
        res.redirect('/event');
    } catch (err) {
        console.log(err)
        res.send(err)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const allEvent = await Event.findById(req.params.id)
        res.render('event/show.ejs', {
            Event: allEvent
        });
    } catch (err){
        console.log(err);
        res.send(err);
    }
});

router.get('/:id/edit', async (req, res) => {
    try {
        const foundEvent = await Event.findById(req.params.id)
        res.render('event/edit.ejs', {
            Event: foundEvent
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
