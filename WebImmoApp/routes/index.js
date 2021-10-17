const express = require('express');
const router = express.Router();
const {esnureAuthenticated, ensureAuthenticated } = require('../config/auth');


// Welcome page
router.get('/', (req,res) => res.render('Homepage'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req,res) =>
 res.render('dashboard', {
     name: req.user.name
 }));

module.exports = router;