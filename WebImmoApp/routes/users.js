const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// User model

const User = require('../models/Users')
// Login Page
router.get('/login', (req,res) => res.render('login'));

// Register Page
router.get('/register', (req,res) => res.render('register'));


// Register Handle

router.post('/register', (req,res) => {
    const {title, surname, name, phone, email, address, postcode, municipality, agency, ipiNumber } = req.body;

    /*TODO
     Check if every field is filled in
      if {} else {
          ... Here put code that comes underneath
      }
    */

      User.findOne({email:email}).then(user => {
          if(user) {
              // User exists

          } else {
              // Here we create the user in the database
              const newUser = new User({
                title,
                surname, 
                name, 
                phone, 
                email, 
                address, 
                postcode, 
                municipality, 
                agency, 
                ipiNumber 
              });

              console.log(newUser);
              res.send('hello');

          }
      });
});

module.exports = router;