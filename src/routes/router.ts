import { Router } from 'express';
import { paymentRoutes } from './payments.routes'

const router = Router();

router.use('/payments', paymentRoutes)
router.get('/', (req, res) =>  res.json({message: 'Hello world'}))

export { router }