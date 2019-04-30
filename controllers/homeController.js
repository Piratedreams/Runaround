const express = require('express')
const router = express.Router()
const Runner = require('../models/runner')


router.get('/', async (req, res) => {
  if(req.session.logged === true){
    try{
      const foundRunner = await Runner.findById(req.session.runnerId)
      res.render('homepage/index.ejs', {
        runnerId: req.session.runnerId
      })
    } catch(error) {
      res.send(error)
    }
 } else {
   res.redirect('auth/login')
 }

})
//
// router.get('/', (req, res) => {
//   // console.log(req.session, 'in homepage index');
//   if(req.session.logged === true){
//     Runner.findById(, (err, foundRunner) => {
//       if(err){
//         res.send(err)
//       } else {
//         res.render('homepage/index.ejs', {
//           Runner: foundRunner
//         })
//       }
//     })
//   } else {
//     res.redirect('/auth/login')
//   }
// })

// router.get('/register', (req, res) => {
//   res.render('/auth/login')
// })



module.exports = router
