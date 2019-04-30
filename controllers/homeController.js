const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

router.get('/', (req, res) => {
  console.log(req.session)
  res.render('homepage/index.ejs',{
    runner: req.session.runnersId
  })
})

router.get('/register', (req, res) => {
  res.render('/auth/login')
})

module.exports = router
