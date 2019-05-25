"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const blog = __importStar(require("../controllers/index"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerDocument = require("../../swagger.json");
router.use("/doc", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
// Primary app routes.
router.post("/blog", blog.blogCreate);
router.get("/blog", blog.blogFindAll);
router.get("/blog/:blogId", blog.blogFindOne);
router.put("/blog/:blogId", blog.blogUpdate);
router.delete("/blog/:blogId", blog.blogDelete);
exports.default = router;
//# sourceMappingURL=index.js.map