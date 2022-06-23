"use strict";
exports.__esModule = true;
exports.paymentRoutes = void 0;
var express_1 = require("express");
var capturePaymentIntentController_1 = require("../modules/payments/useCases/capturePaymentIntent/capturePaymentIntentController");
var CreateDoctorController_1 = require("../modules/payments/useCases/createDoctor/CreateDoctorController");
var CreateDoctorStandandController_1 = require("../modules/payments/useCases/createDoctorStandard/CreateDoctorStandandController");
var CreatePaymentIntentController_1 = require("../modules/payments/useCases/createPaymentIntent/CreatePaymentIntentController");
var paymentRoutes = (0, express_1.Router)();
exports.paymentRoutes = paymentRoutes;
var createPaymentIntentController = new CreatePaymentIntentController_1.CreatePaymentIntentController();
var capturePaymentIntentController = new capturePaymentIntentController_1.CapturePaymentIntentController();
var createDoctorController = new CreateDoctorController_1.CreateDoctorController();
var createDoctorStandardController = new CreateDoctorStandandController_1.CreateDoctorStandardController();
paymentRoutes.post('/create-payment-intent', createPaymentIntentController.handle);
paymentRoutes.post('/capture-payment-intent', capturePaymentIntentController.handle);
paymentRoutes.post('/create/doctor/express', createDoctorController.handle);
paymentRoutes.post('/create/doctor/standard', createDoctorStandardController.handle);
//# sourceMappingURL=payments.routes.js.map