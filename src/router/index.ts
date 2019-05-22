import {Express, Request, Response} from "express";
import express from 'express'
const router: Express = express();

// Primary app routes.
router.get('/', (req:Request, res:Response) => {
  res.json({
    status: 'api',
    message: 'api demo'
  })
})

export default router