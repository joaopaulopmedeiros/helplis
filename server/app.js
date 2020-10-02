const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hi, everybody!')
})

app.listen(port, () => {
  console.log(`Helplis app listening at http://localhost:${port}`)
})