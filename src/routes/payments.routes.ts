import { Router } from 'express';
import { CapturePaymentIntentController } from '../modules/payments/useCases/capturePaymentIntent/capturePaymentIntentController';
import { CreateDoctorController } from '../modules/payments/useCases/createDoctor/CreateDoctorController';
import {  CreateDoctorStandardController} from '../modules/payments/useCases/createDoctorStandard/CreateDoctorStandandController';
import { CreatePaymentIntentController } from '../modules/payments/useCases/createPaymentIntent/CreatePaymentIntentController';

const paymentRoutes = Router()

const createPaymentIntentController = new CreatePaymentIntentController()
const capturePaymentIntentController = new CapturePaymentIntentController()
const createDoctorController = new CreateDoctorController()
const createDoctorStandardController = new CreateDoctorStandardController()

paymentRoutes.post('/create-payment-intent', createPaymentIntentController.handle)
paymentRoutes.post('/capture-payment-intent', capturePaymentIntentController.handle)

paymentRoutes.post('/create/doctor/express', createDoctorController.handle)
paymentRoutes.post('/create/doctor/standard', createDoctorStandardController.handle)

export { paymentRoutes }