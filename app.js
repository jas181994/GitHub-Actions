const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('node appp deployed through Github actions tested on eks 070526 ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

