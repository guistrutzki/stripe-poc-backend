"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.morganLogging = void 0;
var morgan_1 = __importDefault(require("morgan"));
morgan_1["default"].token('body', function (req) {
    return JSON.stringify(req.body);
});
morgan_1["default"].token("status", function (_, res) {
    var status = (typeof res.headersSent !== "boolean"
        ? Boolean(res._header)
        : res.headersSent)
        ? res.statusCode
        : undefined;
    var color = status >= 500
        ? 31 // red
        : status >= 400
            ? 33 // yellow
            : status >= 300
                ? 36 // cyan
                : status >= 200
                    ? 32 // green
                    : 0; // no color
    return "\u001B[".concat(color, "m").concat(status, "\u001B[0m");
});
var morganLogging = (0, morgan_1["default"])(':method :status :url :body');
exports.morganLogging = morganLogging;
//# sourceMappingURL=logger.js.map