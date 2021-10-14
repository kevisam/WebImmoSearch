const express = require('express');
const router = express.Router();


// User model

const User = require('../models/Users')
// Login Page
router.get('/login', (req,res) => res.render('login'));

// Register Page
router.get('/register', (req,res) => res.render('register'));


// Register Handle

router.post('/register', (req,res) => {
    //const {title, surname, name, phone, email, address, postcode, municipality, agency, ipiNumber } = req.body;

    console.log(req.body)
    res.send('Hello world')
});

module.exports = router;