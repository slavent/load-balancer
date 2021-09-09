const express = require('express')
const app = express()
const port = 3002

app.get('/', (req, res) => {
    res.send('Server 2\n')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})