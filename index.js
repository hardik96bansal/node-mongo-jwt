const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const port = 3000;
const hostname = 'localhost'

const app = express()
const UserRouter = require('./users/routes.config')
app.use(bodyParser.json())
app.use(morgan('dev'))

app.all('/',(req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('Hi')
})

UserRouter.routesConfig(app)

app.listen(port,hostname,() => {
    console.log(`Server listening at port https://${hostname}:${port}`)
})