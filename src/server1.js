const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send('Server 1\n')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})