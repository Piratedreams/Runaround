const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
require('./db/db');
require('dotenv').config()

const runnerController  = require('./controllers/runnerController');
const eventController = require('./controllers/eventController');
const authController = require('./controllers/authController');
const homeController = require('./controllers/homeController')

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use('/css', express.static('css'))

app.use(session({
  secret: 'Toasts doesnt toast toast, toasters toast toast',
  resave: false,
  saveUninitialized: false
}))

app.use('/runner', runnerController);
app.use('/event', eventController);
app.use('/', homeController)
app.use('/auth', authController);

app.use(function(req, res, next) {
  res.locals.runnerId = req.session.runnerId;
  next();
});

app.listen(3000, () => {
  console.log('YEARRRRD: ', 3000);
});

app.listen(process.env.PORT, () => {
  console.log('listening on port 3000');
})
