const express = require('express')
const app = express()
const port = 3000

//router
app.get('/trangchu', (req, res) => {
    res.send('Trang chủ')
})

//127.0.0.1 - localhost 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})