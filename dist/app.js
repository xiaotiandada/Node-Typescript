"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const index_1 = __importDefault(require("./router/index"));
// Configure bodyparser to handle post requests
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Connect to MongoDB
mongoose_1.default.connect('mongodb://localhost/restful')
    .then(() => {
    console.log('mongoose connect success');
})
    .catch((err) => {
    console.log(`mongoose connect error ${err}`);
});
// Express configuration
app.set('port', process.env.PORT || 3000);
app.use('/api', index_1.default);
app.listen(app.get('port'), () => console.log(`app listening on port ${app.get('port')}!`));
//# sourceMappingURL=app.js.map