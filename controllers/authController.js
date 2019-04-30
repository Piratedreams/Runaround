const express = require('express')
const router = express.Router()
const Runner = require('../models/runner')
const bcrypt =require('bcryptjs')

router.get('/login', (req, res) => {
  res.render('login.ejs', {
    message: undefined
  })
})

router.post('/register', async(req, res) => {
  const password = req.body.password
  const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  const userEntry = {}
    userEntry.email = req.body.email
    userEntry.age = req.body.age
    userEntry.name = req.body.name
    userEntry.gender = req.body.gender
    userEntry.password = passwordHash
    console.log(req.body);
  try {
    const createdRunner = await Runner.create(userEntry)
    req.session.logged = true
    req.session.runnerId = createdRunner._id
    console.log(createdRunner);
    res.redirect('/')
    //5cc7c1accd58762bd26a7255

  } catch(error) {
    console.log(error)
    res.send(error)
  }
})

router.post('/login', async(req, res) => {
  try {
    const foundRunner = await Runner.findOne({'email': req.body.email})
    if(foundRunner){

      if(bcrypt.compareSync(req.body.password, foundRunner.password) === true){
        req.session.logged = true
        req.session.runnerId = foundRunner._id

        // console.log(req.session, 'login sucessful');


        res.redirect('/')


      } else {
        res.render('login.ejs',{
          message: "Invalid password or username"
        })
      }
    } else {
      res.render('login.ejs', {
        message: "Invalid password or username"
      })
    }
  } catch(error) {
    res.send(error)
    console.log(error);
  }
})

router.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if(error) {
      res.send(error)
    } else {
      res.redirect('/auth/login')
    }
  })
})

module.exports = router
