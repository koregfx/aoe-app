import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'

import auth from './routes/auth.js'
import fav from './routes/fav.js'
import aoe from './routes/aoe.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use( express.static('public') )


app.use('/api/auth', auth)
app.use('/api/fav', fav)
app.use('/api/civilization', aoe)


app.listen(process.env.PORT,()=>{
    console.log(`app listen in port ${process.env.PORT}`)
})