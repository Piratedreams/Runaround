const express = require('express');

const router  = express.Router();
const Runner  = require('../models/runner');
const event   = require('../models/event');
const isAuthorized = require('../helpers/authorize')
// router.get ('/', async (req, res)=>{
//     try {
//         const foundRunner = await Runner.find({});
//         res.render('runner/index.ejs', {
//             runner: foundRunner
//         })
//     } catch(err) {
//     res.send(err)
//     }
// });


router.get('/:id', async (req, res)=>{
    try {
        console.log(req.session.runnersId)
        if (isAuthorized(req.session.runnerId, req.params.id)) {
          const foundRunner = await Runner.findById(req.params.id);
          res.render('runner/show.ejs', {
            runner: foundRunner
          });
        } else {
          res.send("404 not found")
        }
        } catch(err){
            res.send(err)
        }
});

router.get('/:id/edit',  async (req, res)=>{
    try {
        const foundRunner = await Runner.findById(req.params.id)

        if (isAuthorized(req.session.runnerId, req.params.id)) {
        //const foundRunner = req.session.usersId;

        res.render('runner/edit.ejs', {
            runner: foundRunner
        })
      } else {
        res.send("404 not found")
        }
      }catch(err) {
            res.send(err)
        }
    });


router.put('/:id', async (req, res)=>{
    try {
        const updateRunner = await Runner.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (isAuthorized(req.session.runnerId, req.params.id)) {
        res.redirect('/');
      } else {
        res.send("404 not found")
      }
    } catch(err){
        res.send(err);
    }
})

router.delete('/:id', async (req, res)=>{
    try {
        const deleteRunner = await Runner.findByIdAndDelete(req.params.id);
        if (isAuthorized(req.session.runnerId, req.params.id)) {
        res.redirect('/');
      } else {
        res.send("404 not found")
      }
    } catch(err){
        res.send(err);
    }
});


module.exports = router;
