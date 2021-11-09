"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var ButterflyController = __importStar(require("./controllers/butterfly"));
var app = (0, express_1.default)();
app.use(body_parser_1.default.json({ limit: '10mb' }));
app.use(body_parser_1.default.text({ type: 'application/x-www-form-urlencoded' }));
app.use((0, cookie_parser_1.default)());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', "Content-type,Accept,x-token,Cookie,timestamp");
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    return next();
});
app.get('/', function (req, res) {
    res
        .status(200)
        .json({
        message: 'kkk'
    });
});
app.use('/butterflies', ButterflyController.router);
app.use(function (req, res) {
    res
        .status(404)
        .json({
        message: "There is no method " + req.method + " for endpoint: " + req.path
    });
});
var genericErrorHandler = function (err, req, res) {
    console.error(err);
    res
        .status(500)
        .json({
        message: 'unexpected error'
    });
};
app.use(genericErrorHandler);
var port = process.env.PORT || 8000;
var server = app.listen(port, function () {
    console.log("Server started at http://localhost:" + port);
});
//# sourceMappingURL=index.js.map