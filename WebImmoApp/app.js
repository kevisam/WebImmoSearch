const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log('Server started on port ' + PORT));

//Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/images', express.static(__dirname + 'public/images'));

//DB Config
const db = require('./config/keys').MongoURI;

mongoose.connect(db, { useNewUrlParser : true})
.then( () => console.log('MongoDB connected ...'))
.catch(err => console.log(err));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Bodyparser
app.use(express.urlencoded({ extended: false}));

//routes 

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));