require('dotenv').config()
const express = require('express')
const app = express()
const userRouter = require('./routes/userRouter.js')
const adminRouter = require('./routes/adminRouter.js')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_CONNECTION_URL)

let db = mongoose.connection

db.on("error", () => {console.log("Houve um erro")})
db.once("open", () => {console.log("Banco carregado")})

app.use('/user', express.json(), userRouter)

app.get('/admin', adminRouter)

app.listen(process.env.PORT, ()=>{console.log("Server Running")})