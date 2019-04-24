const express = require('express');

const router  = express.Router();
const runner  = require('../models/runner');
const event   = require('../models/event');

router.get ('/', async (req, res)=>{
    try {
        const foundRunners = await runner.find({});
        res.render('index.ejs', {
            runner: foundRunner


    } catch(err){
        res.send(err)
    }

    // runners.find({}, (err, runnersFromTheDatabase)=>{
    //     res.render('runner/index.ejs', {
    //         runnersOnTheTemplate: runnersFromTheDatabase
    //     });
    // });
});


// router.get('/new', (req, res)=>{
//     res.render('runner/new.ejs');
// })

router.get('/:id', async (req, res)=>{

    try {
        const foundRunner = await runner.findById(req,params,id);
        res.render('show.ejs', {
          runner: foundRunner
        });

        } catch(err){
            res.send(err)
        }
    // runner.
    // findById(req.params.id)  
    // .populate('runners')
    // .exec((err, runnerFromTheDatabase)=>{
    //     if(err){
    //         res.send(err);
    //     } else {
    //         res.render('runner/show.ejs', {
    //             runnerOnTheTemplate: runnerFromTheDatabase});
    //     }
    // })
});

router.get('/:id/edit', async (req, res)=>{
    const foundRunner = await runnerFindById(req.params.id)

    try {
        res.render('new.ejs', {
            runner: foundRunner
        });

        } catch(err){
            res.send(err)
        }
    
    // Runner.findById(req.params.id, (err, runnerFromTheDatabase)=>{
    //     res.render('runner/edit.ejs', {
    //         runnerOnTheTemplate: runnerFromTheDatabase
    //     })
    // })
})

router.post('/', async (req, res)=>{
    try {
        const createRunner = await runner.create(req.body);
        redirect('/runners');

    } catch(err){
        res.send(err)
    }
    
    // Runner.create(req.body, (err, newlyCreatedRunner)=>{
    //     console.log(newlyCreatedRunner)
    //     res.redirect('/runner')
    // })
});

router.put('/:id', async (req, res)=>{
    try {
        const updateRunner = await runner.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.redirect('/runners');

    } catch(err){
        res.send(err);
    }
    // Runner.findByIdAndUpdate(req.params.id, req.body, (err, runnerFromTheDatabase)=>{
    //     console.log(runnerFromTheDatabase)
    //     res.redirect('/runner');
    // })
})

router.delete('/:id', async (req, res)=>{

    try {
        const deleteRunner = await runner.delete(req.body)
        res.redirect('/runners')

        } catch(err){
            res.show(err)
        }
    });
    // runner.findByIdAndDelete(req.params.id, (err, runnerFromTheDatabase)=>{
    //     console.log(runnerFromTheDatabase);
    //     runner.deleteMany({
    //         _id: {
    //             $in: runnerFromTheDatabase.runner
    //         }
    //     }, (err, data)=>{
    //         console.log(data);
    //         res.redirect('/runner');
    //     })
    // })


module.exports = router;

