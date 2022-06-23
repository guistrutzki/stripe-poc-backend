"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
require("dotenv/config");
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var cors_1 = __importDefault(require("cors"));
var routes_1 = require("./routes");
var logger_1 = require("./middlewares/logger");
var error_1 = require("./middlewares/error");
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use((0, cors_1["default"])());
app.use(logger_1.morganLogging);
app.use(routes_1.router);
app.use(error_1.errorMiddleware);
app.listen(3000, function () { return console.log("Server is running 🚀 - Port 3000"); });
//# sourceMappingURL=server.js.map