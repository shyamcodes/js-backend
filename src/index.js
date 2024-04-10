/*import mongoose from 'mongoose';
import { DB_NAME } from './constants'
import express from 'express'
const app = express();*/


// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
import connectDB from './db/index.js'
import {app} from './app.js'



dotenv.config({
    path: './env'
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is runnig at port : ${process.env.PORT}`)
        })
       
    })
    .catch((err) => {
        console.log("MONGO DB connection failed !!!", err)
    })







/*; (async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("error", error)
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`app is listeing on port ${process.env.PORT}`)
        })

    } catch (error) {
        console.log("error", error)
        throw error
    }
})()*/