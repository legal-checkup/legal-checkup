const express = require('express')
const proxy = require('http-proxy-middleware')
const cors = require('cors')

const app = express()

app.get('/', (req, res) => res.send('Centripetal!'))
app.use(cors())
app.options('*', cors())

app.use(
  '/graphql',
  proxy({
    target: 'http://localhost:4000',
    changeOrigin: true,
    ws: true,
    enableCors: true
  })
)

app.listen(process.env.PORT || 4001)