const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

// User model

const User = require('../models/Users')
// Login Page
router.get('/login', (req,res) => res.render('login'));


// Login handle 
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

// Logout handle
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});

// Register Page
router.get('/register', (req,res) => res.render('register'));


// Register Handle

router.post('/register', (req,res) => {
    const {title, surname, name, phone, email, password, password2, address, postcode, municipality, agency, IPInumber } = req.body;

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
                password,
                password2, 
                address, 
                postcode, 
                municipality, 
                agency, 
                IPInumber 
              });

              bcrypt.genSalt(10, (err,salt) => bcrypt.hash(newUser.password, salt, (err,hash) =>{
                if(err) throw err;

                // Save hashed password
                newUser.password = hash;
                // Save user 
                newUser.save()
                .then(user => {
                    req.flash('success_msg', 'You are now registered and can log in');
                    res.redirect('/users/login');
                })
                .catch(err => console.log(err));
              } ))

          }
      });
});

module.exports = router;