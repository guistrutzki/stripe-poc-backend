import { Router } from 'express';
import { paymentRoutes } from './payments.routes'

const router = Router();

router.use('/payments', paymentRoutes)

export { router }