const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
require('./db/db');

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
app.get('/', homeController)
app.use('/auth', authController);

app.listen(3000, () => {
  console.log('YEARRRRD: ', 3000);
});
