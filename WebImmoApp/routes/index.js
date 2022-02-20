const express = require('express');
const router = express.Router();
const Article = require("../models/article")


// Welcome page
router.get('/', (req,res) => res.render('Homepage'));

// Dashboard
router.get('/dashboard', async(req,res) =>
 res.render('dashboard', {    
     user: req.user,
     articles : articles
 }));

 router.get('/request', (req,res) => res.render('YourRequest'));

 router.get('/estimate', (req,res) => res.render('estimateByAgency'));

 router.get('/investortoinvestor',(req,res) => res.render('investortoinvestor'));
module.exports = router;