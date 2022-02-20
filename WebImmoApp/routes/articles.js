const express = require('express');
const Article = require('../models/article');
const router = express.Router();
const cloudinary = require('../config/utils/cloudinary');
const {ensureAuthenticated} = require('../config/auth');
const multer = require('multer');

// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
  var upload = multer({ storage: storage })
router.get('/',ensureAuthenticated , async(req,res) =>{
    const articles = await Article.find({ author: req.user.email })
    res.render('myProfile', {articles: articles, user : req.user})
})
  

router.post('/search', async(req,res) =>{

    console.log(req.body.auctiontype)
    const articles = await Article.find({ 
        housetype : req.body.housetype,
        postalCode : req.body.postalCode,
        nrRooms : req.body.nrRooms,
        price : {$lt: req.body.price},
        auctiontype: req.body.auctiontype  })
    res.render('searchArticles', {articles: articles, user : req.user})
})

router.post('/', upload.single('image'), async (req,res) => {
//console.log(req.body);
try{
    console.log(req.file);
    const img = await cloudinary.uploader.upload(req.file.path);

    const rental = req.body.rental
    const buy = req.body.buy
    
    let article = new Article({
        housetype : req.body.housetype,
        price : req.body.price,
        nrRooms : req.body.nrRooms,
        postalCode : req.body.postalCode,
        author : req.user.email,
        image : img.secure_url,
    }); 

    console.log(article); 
    article = await article.save();
    res.redirect(`/articles/${article.id}`) 
} catch(e) {
    console.log(e);
    res.render('articles/new', {article:article})
}
    
})

router.get('/new',ensureAuthenticated ,(req,res) => {
    res.render('articles/new', {article: new Article()})
})

router.get('/:id', async(req,res) =>{
    const article = await Article.findById(req.params.id)
    if(article == null) res.redirect('/') // Redirect user to homepage if he looks up for a wrong id
    res.render('articles/show', {article:article})
})





module.exports = router;