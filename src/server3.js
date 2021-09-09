const express = require('express')
const app = express()
const port = 3003

app.get('/', (req, res) => {
    res.send('Server 3\n')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})