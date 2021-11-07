const express = require('express');
const router = express.Router();
const {esnureAuthenticated, ensureAuthenticated } = require('../config/auth');
const Article = require("../models/article")


// Welcome page
router.get('/', (req,res) => res.render('Homepage'));

// Dashboard
router.get('/dashboard', async(req,res) =>
 res.render('dashboard', {    
     user: req.user,
     articles : articles
 }));

module.exports = router;