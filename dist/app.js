"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const index_1 = __importDefault(require("./routers/index"));
// config
const index_2 = require("./configs/index");
const bluebird_1 = __importDefault(require("bluebird"));
// Configure bodyparser to handle post requests
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
//Enable CORS for all HTTP methods
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// Connect to MongoDB
mongoose_1.default.Promise = bluebird_1.default;
mongoose_1.default.connect(index_2.config.url, { useNewUrlParser: true })
    .then(() => {
    console.log('mongoose connect success');
})
    .catch((err) => {
    console.log(`mongoose connect error ${err}`);
});
// Express configuration
app.set('port', process.env.PORT || index_2.config.port);
app.use(index_1.default);
app.listen(app.get('port'), () => console.log(`app listening on port ${app.get('port')}!`));
//# sourceMappingURL=app.js.map