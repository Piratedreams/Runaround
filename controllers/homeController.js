const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

router.get('/', (req, res) => {
  res.render('homepage/index.ejs')
})

router.get('/register', (req, res) => {
  res.render('/auth/login')
})


module.exports = router
