const express = require('express')
require('dotenv').config()
const dbconnect = require('./config/dbconnect')
const initRoutes = require('./routes')

const app = express()
const port=process.env.port || 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
dbconnect()
initRoutes(app)

app.listen(port,()=>{ console.log(`listening on port http://localhost:${port}`) })