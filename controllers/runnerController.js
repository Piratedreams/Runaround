const express = require('express');
const route   = express.Router();
const Runner  = require('../models/runner');
const Event   = require('../models/event');

router.get('/', (req, res)=>{
    runners.find({}, (err, runnersFromTheDatabase)=>{
        res.render('runner/index.ejs', {
            runnersOnTheTemplate: runnersFromTheDatabase
        });
    });
});

router.get('/new', (req, res)=>{
    res.render('runner/new.ejs');
})

router.get('/:id', (req, res)=>{
    runner.findById(req.params.id)  
    .populate('runners')
    .exec((err, runnerFromTheDatabase)=>{
        if(err){
            res.send(err);
        } else {
            res.render('runner/show.ejs', {
                runnerOnTheTemplate: runnerFromTheDatabase});
        }
    })
})

router.get('/:id/edit', (req, res)=>{
    Runner.findById(req.params.id, (err, runnerFromTheDatabase)=>{
        res.render('runner/edit.ejs', {
            runnerOnTheTemplate: runnerFromTheDatabase
        })
    })
})

router.post('/', (req, res)=>{
    Runner.create(req.body, (err, newlyCreatedRunner)=>{
        console.lRunn(newlyCreatedRunner)
        res.redirect('/runner')
    })
})

router.put('/:id', (req, res)=>{
    Runner.findByIdAndUpdate(req.params.id, req.body, (err, runnerFromTheDatabase)=>{
        console.log(runnerFromTheDatabase)
        res.redirect('/runner');
    })
})

router.delete('/:id', (req, res)=>{
    runner.findByIdAndDelete(req.params.id, (err, runnerFromTheDatabase)=>{
        console.log(runnerFromTheDatabase);
        runner.deleteMany({
            _id: {
                $in: runnerFromTheDatabase.runner
            }
        }, (err, data)=>{
            console.log(data);
            res.redirect('/runner');
        })
    })
})

module.exports = router;