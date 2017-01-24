const express = require('express')
const app = express()

app.use(express.static('./'))
app.use(express.static('dist'))

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('app listening on', port)
})
