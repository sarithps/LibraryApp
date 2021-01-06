const express = require('express');
const authorRouter = express.Router();

var authors = [
    {
    name: 'Garcia Marques',
    books:'100 years of solitude',
    country: 'Colombia',
    img: 'Gabriel.jpg'
    },
    {
        name: 'J.K Rowling',
        books:'Harry Potter',
        country: 'UK',
        img: 'jk.jpg'
    },
    {
        name: 'Rudyard Kipling',
        books:'The Jungle Book',
        country: 'India',
        img: 'rk.jpg'
    }
]

authorRouter.get('/', function(req,res){
    res.render('authors',{
        nav:[{link:'/books',name:'Books'}, {link:'/authors', name:'Authors'},{link:'/addbook', name:'Add book'},{link:'/addauthor', name:'Add author'},{link:'/',name:'Sign Out'} ],
        title:'Library',
        authors
    });
});

authorRouter.get('/:i', function(req,res){
    const id = req.params.i
    res.render('author',{
        nav:[{link:'/books',name:'Books'}, {link:'/authors', name:'Authors'},{link:'/addbook', name:'Add book'},{link:'/addauthor', name:'Add author'},{link:'/',name:'Sign Out'} ],
        title:'Library',
        author: authors[id]
    })
});

module.exports = authorRouter;