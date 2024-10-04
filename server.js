//siin käivitan serveri

import express from "express";
import dotenv from 'dotenv'
import nodemon from "nodemon";

dotenv.config()

const PORT = process.env.PORT || 3006
const animal = ['koer', 'hobune', 'lammas', 'inimene']

const app = express()

app.get('/', (request, response)=>{
    response.status(200).json(animal[1])

    })



app.listen(PORT, () =>{
    console.log(`Server listening on http://localhost:${PORT}`)
})