const express = require('express');
const addBookRouter = express.Router();


addBookRouter.get('/', function(req,res){
    res.render('addbook',{
        nav:[{link:'/books',name:'Books'}, {link:'/authors', name:'Authors'},{link:'/addbook', name:'Add book'},{link:'/addauthor', name:'Add author'},{link:'/',name:'Sign Out'} ],
        title:'Library'
    });
});

module.exports = addBookRouter;