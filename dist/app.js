"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.get('/', (req, res) => res.send('Hello World! 23333~ 自动编译刷新1222111'));
app.listen(3000, () => console.log('Example app listening on port 3000!'));
//# sourceMappingURL=app.js.map