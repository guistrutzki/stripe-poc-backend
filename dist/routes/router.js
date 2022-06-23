"use strict";
exports.__esModule = true;
exports.router = void 0;
var express_1 = require("express");
var payments_routes_1 = require("./payments.routes");
var router = (0, express_1.Router)();
exports.router = router;
router.use('/payments', payments_routes_1.paymentRoutes);
//# sourceMappingURL=router.js.map