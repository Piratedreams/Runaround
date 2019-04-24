const express = require('express');
const router = express.Router();
const Runner = require('../models/Runner');
const Event = require('../models/Event');


router.get('/', (req, res) => {
    res.render('/event/index.ejs')
});






module.exports = router;
