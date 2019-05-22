import bodyParser from "body-parser";
import mongoose from "mongoose";

import {Express, Request, Response} from "express";
import express from 'express'
const app: Express = express();
import router from './router/index'



// Configure bodyparser to handle post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost/restful')
.then(() => {
  console.log('mongoose connect success')
})
.catch((err: any) => {
  console.log(`mongoose connect error ${err}`);
})

// Express configuration
app.set('port', process.env.PORT || 3000)
app.use('/api', router)

app.listen(app.get('port'), () => console.log(`app listening on port ${app.get('port')}!`))
