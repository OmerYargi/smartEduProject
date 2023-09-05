const express = require('express');
const app = express();

// MY FILES
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');

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

// ROUTE Bu dosya altında tüm route işlemleri yapıldığı için app.get kullanma, app.use kullan
app.use('/', pageRoute);
app.use('/courses', courseRoute);

const port = 3000;
app.listen(port, () => {
    console.log('BAŞARILI');
});
