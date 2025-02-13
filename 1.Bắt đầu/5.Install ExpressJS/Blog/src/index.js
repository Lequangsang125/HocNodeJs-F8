const express = require('express');
const { engine } = require('express-handlebars'); // Import đúng
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({
    extname: '.hbs'
})); // Sửa lại
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

// Router
app.get('/', (req, res) => {
    res.render('home'); // Đảm bảo có file 'views/home.handlebars'
});

app.get('/news', (req, res) => {
    res.render('news');
});


// 127.0.0.1 - localhost
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
