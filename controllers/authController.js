const express = require('express')
const router = express.Router()

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
    userEntry.username = req.body.username
    userEntry.password = passwordHash
  try {
    const createdRunner = await Runner.create(userEntry)
    req.session.logged = true
    req.session.runnersId = createdRunner._id

    res.redirect('/runners')

  } catch(error) {
    res.send(error)
  }
})

router.post('/login', async(req, res) => {
  try {
    const foundrunner = await Runner.findOne({'username': req.body.username})
    if(foundUser){
      if(bcrypt.compareSync(req.body.password, foundUser.password) === true){
        req.session.logged = true
        req.session.usersId = foundUser._id
        console.log(req.session, 'login sucessful');

        res.redirect('/runners')

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
