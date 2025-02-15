const newsRouter = require('./news')
const meRouter = require('./me')
const coursesRouter = require('./couses')
const siteRouter = require('./site')

function route(app) {
    // Router
    app.use('/news',newsRouter)
    app.use('/me',meRouter)
    app.use('/courses',coursesRouter)
    app.use('/', siteRouter)
}

module.exports = route;