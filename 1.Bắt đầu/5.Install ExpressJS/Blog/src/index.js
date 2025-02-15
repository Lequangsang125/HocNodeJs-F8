const express = require('express');
const { engine } = require('express-handlebars'); // Import đúng
const morgan = require('morgan');
const path = require('path');
const route = require('./routes');
const methodOverride = require('method-override');

const db = require('./config/db')

//connect to db
db.connect()

const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());

app.use(methodOverride('_method'))

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({
    extname: '.hbs',
    helpers: {
        sum: (a,b) => a + b
    }
})); 
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

route(app);

// 127.0.0.1 - localhost
app.listen(port, () => {
    console.log(` app listening on port ${port}`);
});
