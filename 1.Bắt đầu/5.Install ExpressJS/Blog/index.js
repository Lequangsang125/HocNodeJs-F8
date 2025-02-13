const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))

//router
app.get('/trangchu', (req, res) => {
    res.send('Trang c')
})

//127.0.0.1 - localhost 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})