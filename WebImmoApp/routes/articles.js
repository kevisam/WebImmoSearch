const express = require('express');
const Article = require('../models/article');
const router = express.Router();



router.get('/', async(req,res) =>{
    const articles = await Article.find({ author: req.user.email })
    res.render('dashboard', {articles: articles, user : req.user})
})

router.post('/', async (req,res) => {
    let article = new Article({
        housetype : req.body.housetype,
        postalCode : req.body.postalCode,
        nrRooms : req.body.nrRooms,
        price : req.body.price,
        author : req.user.email
    })
    console.log(req.body)
    console.log(article)
try{
    article = await article.save()
    res.redirect(`/articles/${article.id}`)
} catch(e) {
    res.render('articles/new', {article:article})
}
    
})

router.get('/new',(req,res) => {
    res.render('articles/new', {article: new Article()})
}
)

router.get('/:id', async(req,res) =>{
    const article = await Article.findById(req.params.id)
    if(article == null) res.redirect('/') // Redirect user to homepage if he looks up for a wrong id
    res.render('articles/show', {article:article})
})


module.exports = router;