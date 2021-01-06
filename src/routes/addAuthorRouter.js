const express = require('express');
const addAuthorRouter = express.Router();


addAuthorRouter.get('/', function(req,res){
    res.render('addauthor',{
        nav:[{link:'/books',name:'Books'}, {link:'/authors', name:'Authors'},{link:'/addbook', name:'Add book'},{link:'/addauthor', name:'Add author'},{link:'/',name:'Sign Out'} ],
        title:'Library'
    });
});

module.exports = addAuthorRouter;