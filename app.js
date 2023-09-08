const express = require('express');
const app = express();

// express-session
const session = require('express-session');

// MY FILES
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');
const categoryRoute = require('./routes/categoryRoute');
const userRoute = require('./routes/userRoute');

// Veritabanına bağlanmak için Mongoose
const mongoose = require('mongoose');

// Veritabanına bağlanmamızı sağlayan kod
mongoose
    .connect('mongodb://localhost/smartedu-db')
    .then(() => console.log('DATABASE OK'));

// Template Engine
app.set('view engine', 'ejs');

// Static Files
app.use(express.static('public'));

// MIDLEWARES
// Alttaki iki kod req.body den gelecek parametreleri okumamızı sağlar.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
        secret: 'my_keyboard_cat',
        resave: false,
        saveUninitialized: true,
    })
);

// ROUTE Bu dosya altında tüm route işlemleri yapıldığı için app.get kullanma, app.use kullan
app.use('/', pageRoute);
app.use('/courses', courseRoute);
app.use('/categories', categoryRoute);
app.use('/users', userRoute);

// Global Variables
// Kullanıcı girişi var ise çıkış yap butnu gözükecek
// * sembolu tüm url req karşılaması yapar. Bu kod bir giriş yapılırsa hafızada tutulmasını sağlayaca.
global.userIN = null;
app.use('*', (req, res, next) => {
    userIN = req.session.global.userID;
    next();
});

const port = 3000;
app.listen(port, () => {
    console.log('BAŞARILI');
});
