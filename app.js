// library app
const express = require('express');
const app = express();
const booksRouter = require('./src/routes/bookRoutes');
const authorRouter = require('./src/routes/authorRoutes');
const signupRouter = require('./src/routes/signupRouter');
const loginRouter = require('./src/routes/loginRouter');
const homeRouter = require('./src/routes/homeRouter');
const addBookRouter = require('./src/routes/addBookRouter');
const addAuthorRouter = require('./src/routes/addAuthorRouter');

app.use(express.static('./public'));

app.set('view engine', 'ejs');

app.set('views', './src/views');

app.use('/books',booksRouter);

app.use('/authors',authorRouter);

app.use('/signup', signupRouter);

app.use('/login', loginRouter);

app.use('/home',homeRouter);

app.use('/addbook',addBookRouter);

app.use('/addauthor', addAuthorRouter)

app.get('/', function(req,res){
    res.render('index', {
        nav:[{link:'/signup', name:'SignUp'},{link:'/login', name:'LogIn'} ],
        title:'Library'
    });
});

app.listen(5000);