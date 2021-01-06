const express = require('express');
const booksRouter = express.Router();

var books = [
    {
    title:'100 years of solitude',
    author: 'Garcia Marques',
    genre: 'Magical realism',
    img: '100yrs.jpg'
    },
    {
        title:'The Jungle Book',
        author: 'Rudyard Kipling',
        genre: 'Fiction',
        img: 'junglebook.jpg'
    },
    {
        title:'Sapiens',
        author: 'Yuval Noah Harari',
        genre: 'Non-fiction',
        img: 'sapiens.jpg'
    }
]

booksRouter.get('/', function(req,res){
    res.render('books',{
        nav:[{link:'/books',name:'Books'}, {link:'/authors', name:'Authors'},{link:'/addbook', name:'Add book'},{link:'/addauthor', name:'Add author'},{link:'/',name:'Sign Out'} ],
        title:'Library',
        books
    });
});

booksRouter.get('/:i', function(req,res){
    const id = req.params.i
    res.render('book',{
        nav:[{link:'/books',name:'Books'}, {link:'/authors', name:'Authors'},{link:'/addbook', name:'Add book'},{link:'/addauthor', name:'Add author'},{link:'/',name:'Sign Out'} ],
        title:'Library',
        book: books[id]
    })
});

module.exports = booksRouter;