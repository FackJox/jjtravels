const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require('dotenv')
const { json } = require('body-parser')


const indexRouter = require('./routes/index');
const photosRouter = require('./routes/photos');
const usersRouter = require('./routes/users');

const app = express();

const { parsed: config } = dotenv.config()

// Session
const MONGO_URI = config.MONGOURL

app.use(
  session({
      secret: "umm apple towel shirt",
      resave: true,
      saveUninitialized: true,
      store: MongoStore.create({
        client: mongoose.connection.getClient(), 
        mongoUrl: MONGO_URI
      })
  })
)
app.use(passport.initialize());
app.use(passport.session())

app.use(logger('dev'));
app.use(express.json());
app.use(json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({ origin: '*' }));

app.use('/', indexRouter);
app.use('/photos', photosRouter);
app.use('/users', usersRouter);


// db connection
mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log(`MongoDB connected ${MONGO_URI}`))
    .catch(err => console.log(err))


module.exports = app;
