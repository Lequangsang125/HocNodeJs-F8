const express = require('express');
const { engine } = require('express-handlebars'); // Import đúng
const morgan = require('morgan');
const path = require('path');
const methodOverride = require('method-override');

const SortMiddleware = require('./app/middleware/SortMiddleware');

const route = require('./routes');
const db = require('./config/db');

//connect to db
db.connect()

const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(methodOverride('_method'))

app.use(SortMiddleware)
// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
        sortable: (field, sort) => {
            const sortType = field === sort.column ? sort.type : 'default'
            const icons = {
                default: 'fa-solid fa-sort',
                asc: 'fa-solid fa-sort-up',
                desc: 'fa-solid fa-sort-down'
            };
            const types = {
                default: 'desc',
                asc: 'desc',
                desc: 'asc',
            }
            const icon = icons[sortType];
            const type = types[sortType];

            return `<a href="?_sort&column=${field}&type=${type}">
                        <i class="${icon}"></i>
                    </a>`;
        }
    }
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

route(app);

// 127.0.0.1 - localhost
app.listen(port, () => {
    console.log(` app listening on port ${port}`);
});
