import bodyParser from "body-parser";
import mongoose from "mongoose";
import { Express, Request, Response, NextFunction } from "express";
import express from "express";
const app: Express = express();
import routers from "./routers/index";
// config
import {config} from "./configs/index";
import bluebird from "bluebird";

// Configure bodyparser to handle post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS for all HTTP methods
app.use(( req: Request, res: Response, next: NextFunction ) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Connect to MongoDB
(mongoose as any).Promise = bluebird;
mongoose.connect(config.url, {
  useNewUrlParser: true,
  useFindAndModify: false,
})
.then(() => console.log("🚀 mongoose connect success"))
.catch((err: any) => console.log(`❌ mongoose connect error ${err}`));

// Express configuration
app.set("port", process.env.PORT || config.port);
app.use(routers);

export default app;
