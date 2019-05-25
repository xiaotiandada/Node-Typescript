import express from "express";
const router = express.Router();
import * as blog from "../controllers/index";

import swaggerUi from "swagger-ui-express";
const swaggerDocument = require("../../swagger.json");
router.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Primary app routes.
router.post("/blog", blog.blogCreate);
router.get("/blog", blog.blogFindAll);
router.get("/blog/:blogId", blog.blogFindOne);
router.put("/blog/:blogId", blog.blogUpdate);
router.delete("/blog/:blogId", blog.blogDelete);

export default router;
