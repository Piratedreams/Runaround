const express = require('express')
const router = express.Router()
const Runner = require('../models/runner')
const bcrypt =require('bcryptjs')

router.get('/login', (req, res) => {
  res.render('login.ejs', {
    message: req.session.message
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
    req.session.runnersId = createdRunner._id
    console.log(createdRunner);
    res.redirect('/')

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
        req.session.usersId = foundRunner._id
        console.log(req.session, 'login sucessful');

        res.redirect('/')

      } else {
        req.session.message = "Invalid password or username"
        res.redirect('/auth/login')
      }
    } else {
      req.session.message = "Invalid password or username"
      res.redirect('/auth/login')
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
