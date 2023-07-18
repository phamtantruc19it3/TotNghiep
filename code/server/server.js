const express = require('express')
require('dotenv').config()



const app = express()
const port=process.env.port || 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/',(req, res)=>{
    res.send('server online') })
app.listen(port,()=>{ console.log(`listening on port http://localhost:${port}`) })