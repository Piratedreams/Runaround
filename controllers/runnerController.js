const express = require('express');
const router  = express.Router();
const runner  = require('../models/runner');

// router.get('/', (req, res) => {
//     res.render('runner/index.ejs')
// });

router.get ('/', async (req, res)=>{
    try {
        const foundRunner = await runner.find({});
        res.render('runner/index.ejs', {
            runner: foundRunner
        })
    } catch(err){
        res.send(err)
    }
});


// router.get('/new', (req, res)=>{
//     res.render('runner/new.ejs');
// })

router.get('/:id', async (req, res)=>{

    try {
        const foundRunner = await runner.findById(req,params,id);
        res.render('runner/show.ejs', {
          runner: foundRunner
        });

        } catch(err){
            res.send(err)
        }

});

router.get('/:id/edit', async (req, res)=>{

    try {
        const foundRunner = await runnerFindById(req.params.id)
        res.render('runner/edit.ejs', {
            runner: foundRunner
        });

        } catch(err){
            res.send(err)
        }

})

router.post('/', async (req, res)=>{
    try {
        const createRunner = await runner.create(req.body);
        res.redirect('/runner/new.ejs');

    } catch(err){
        res.send(err)
    }
    
});

router.put('/:id', async (req, res)=>{
    try {
        const updateRunner = await runner.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.redirect('/runner/edit.ejs');

    } catch(err){
        res.send(err);
    }
 
})

router.delete('/:id', async (req, res)=>{

    try {
        const deleteRunner = await runner.delete(req.body)
        res.redirect('/runner')

        } catch(err){
            res.show(err)
        }
    });

module.exports = router;

