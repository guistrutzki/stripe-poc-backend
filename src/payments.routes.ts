import { Router } from 'express';
import { CreatePaymentIntentController } from './useCases/createPaymentIntent/createPaymentIntentController';

const paymentRoutes = Router()

const createPaymentIntentController = new CreatePaymentIntentController()

paymentRoutes.post('/create-payment-intent', createPaymentIntentController.handle)

export { paymentRoutes }