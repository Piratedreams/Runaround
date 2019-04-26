const express = require('express');

const router  = express.Router();
const Runner  = require('../models/runner');
const event   = require('../models/event');

router.get ('/', async (req, res)=>{
    try {

        const foundRunner = await Runner.find({});
        res.render('./runner/index.ejs', {
            runner: foundRunner
          })
    } catch(err) {
    res.send(err)
  }
});


router.get('/:id', async (req, res)=>{
    try {

        const foundRunner = await Runner.findById(req,params,id);
        res.render('show.ejs', {
          Runner: foundRunner

        });

        } catch(err){
            res.send(err)
        }

});

router.get('/:id/edit', async (req, res)=>{
    try {
        const foundRunner = await runnerFindById(req.params.id)
        res.render('runner/new.ejs', {
            runner: foundRunner

        });

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

        const updateRunner = await Runner.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.redirect('/runners');
 master

    } catch(err){
        res.send(err);
    }
});



module.exports = router;
