const express = require('express');
const router   = express.Router();
const Runner  = require('../models/Runner');
const Event   = require('../models/Event');

router.get('/', (req, res)=>{
    Runner.find({}, (err, runnersFromTheDatabase)=>{
        res.render('runner/index.ejs', {
            runnersOnTheTemplate: runnersFromTheDatabase
        });
    });
});

// Show the form to create a new user
router.get('/new', (req, res)=>{
    // render the new.ejs screen
    res.render('runners/new.ejs');
})

// Get a user by ID
router.get('/:id', (req, res)=>{
    //  Find the User by ID
    User.findById(req.params.id)
    //  Load cats
    .populate('cats')
    //  search for a match in the user DB
    .exec((err, runnerFromTheDatabase)=>{
        // check for an error
        if(err){
            // send the error
            res.send(err);
        // if there's no error
        } else {
            // render the users screen
            res.render('runners/show.ejs', {
                // move the runners from the DB to the ejs
                runnerOnTheTemplate: runnerFromTheDatabase});
        }

    })
})

//  Get an existing user by ID
router.get('/:id/edit', (req, res)=>{
    //  Passes the User ID to the findById function
    Runner.findById(req.params.id, (err, runnerFromTheDatabase)=>{
        // Render the edit.ejs
        res.render('users/edit.ejs', {
            // move a user from the DB to the Template
            runnerOnTheTemplate: runnerFromTheDatabase
        })
    })
})

//  post the created user
router.post('/', (req, res)=>{
    // pass the body of the new form to the create function
    Runner.create(req.body, (err, newlyCreatedRunner)=>{
        // log the newly created user
        console.lRunn(newlyCreatedUser)
        // redirect back to the users page
        res.redirect('/users')
    })
})

//  get a user to be updated
router.put('/:id', (req, res)=>{
    //  pass the user ID to the function for update
    Runner.findByIdAndUpdate(req.params.id, req.body, (err, userFromTheDatabase)=>{
        // show the user to update
        console.log(runnerFromTheDatabase);
        // redirect back to the Users page
        res.redirect('/users');
    })
})

// This function deletes a user.
router.delete('/:id', (req, res)=>{
    // Delete the user from the DB
    User.findByIdAndDelete(req.params.id, (err, runnerFromTheDatabase)=>{
        // Show the deleted user
        console.log(runnerFromTheDatabase);
        // Delete ALL the cats associated with the deleted user
        Cat.deleteMany({
            _id: {
                // Mongo delete cats where the ID matches the User
                $in: runnerFromTheDatabase.cats
            }
            // Check for errors
        }, (err, data)=>{
            // Show the error
            console.log(data);
            // redirect back to the Users screen
            res.redirect('/users');
        })
    })
})

module.exports = router;
