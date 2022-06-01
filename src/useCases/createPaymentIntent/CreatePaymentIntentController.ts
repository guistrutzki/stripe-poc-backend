import { Request, Response } from "express";
import Stripe from "stripe";

const secretKey = 'sk_test_51L3QSOKfUaT73IIiW8gJhdxUzt8JqesxOWXxJyvsbfVNM8RYTaA6aSwqMRlblqzQlA9r8qpkFeGCCz3SGeOutCeJ00vtWJ0dnT'
const publishableKey = 'pk_test_51L3QSOKfUaT73IIi6UVCw15m9eLw79iUmcxvAC19UE3Qlv2qz6FsyH4VwbHRIIOhdzaNetNypjSKC2WbprNigURj00ExLlYjKh'
const stripe = new Stripe(secretKey, {apiVersion: '2020-08-27'})

class CreatePaymentIntentController {
  async handle(req: Request, res: Response): Promise<void> {
    console.log(req.body)
    const { currency, amount } = req.body

    const totalAmount = amount * 100

    const params: Stripe.PaymentIntentCreateParams = {
      amount: totalAmount,
      currency,
      automatic_payment_methods: {
        enabled: true
      }
    }

    try {
      const paymentIntent: Stripe.PaymentIntent = await stripe.paymentIntents.create(
        params
      )

      res.json({
        clientSecret: paymentIntent.client_secret,
        publishableKey
        
      }); 
    } catch (err) {
      const error = err as Error
      res.status(400).json({
        error: {
          message: error.message,
        }
      })
    }
  }
}

export { CreatePaymentIntentController }