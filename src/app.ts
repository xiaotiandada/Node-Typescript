import {Express, Request, Response} from "express";
import express from 'express'
const app: Express = express();

app.get('/', (req: Request, res: Response) => res.send('Hello World! 23333~ 自动编译刷新1222111'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))