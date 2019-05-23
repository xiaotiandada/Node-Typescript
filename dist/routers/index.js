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
const routers = express_1.default();
const blog = __importStar(require("../controllers/index"));
// Primary app routes.
routers.post('/blog', blog.blogCreate);
routers.get('/blog', blog.blogFindAll);
routers.get('/blog/:blogId', blog.blogFindOne);
routers.put('/blog/:blogId', blog.blogUpdate);
routers.delete('/blog/:blogId', blog.blogDelete);
exports.default = routers;
//# sourceMappingURL=index.js.map