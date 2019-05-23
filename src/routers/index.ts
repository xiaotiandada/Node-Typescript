import {Express, Request, Response} from "express";
import express from 'express'
const routers: Express = express();
import * as blog from '../controllers/index'


// Primary app routes.
routers.post('/blog', blog.blogCreate)
routers.get('/blog', blog.blogFindAll)
routers.get('/blog/:blogId', blog.blogFindOne)
routers.put('/blog/:blogId', blog.blogUpdate)
routers.delete('/blog/:blogId', blog.blogDelete)

export default routers