import { Request, Response } from "express";

import {CapturePaymentIntentUseCase} from './capturePaymentIntent.UseCase'

export class CapturePaymentIntentController {
  async handle(req: Request, res: Response) {
    const { paymentIntentId } = req.body
    
    const capturePaymentIntentUseCase = new CapturePaymentIntentUseCase()
    const result = capturePaymentIntentUseCase.execute({ paymentIntentId })

    return res.json(result)
  }
}