"use strict";
exports.__esModule = true;
exports.errorMiddleware = void 0;
var errorMiddleware = (function (err, req, res, next) {
    if (err instanceof Error) {
        return res.status(400).json({
            message: err.message
        });
    }
    return res.status(500).json({
        status: "error",
        message: "Internal server error"
    });
});
exports.errorMiddleware = errorMiddleware;
//# sourceMappingURL=error.js.map