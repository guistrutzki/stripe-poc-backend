import { Request, Response } from "express";
import { CreatePaymentIntentUseCase } from "./CreatePaymentIntentUseCase";

export class CreatePaymentIntentController {
  async handle(req: Request, res: Response) {
    const { amount, currency } = req.body

    const createPaymentIntentUseCase = new CreatePaymentIntentUseCase()
    const result = await createPaymentIntentUseCase.execute({
      amount,
      currency
    })

    return res.json(result)
  }
}