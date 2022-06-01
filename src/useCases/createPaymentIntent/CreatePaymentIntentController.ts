import { Request, Response } from "express";
import Stripe from 'stripe';

const secretKey = process.env.SECRET_KEY!
const publishableKey = process.env.PUBLISHABLE_KEY!
const customerId = 'cus_LmjU6zgMsaYIms'

const stripe = new Stripe(secretKey, { apiVersion: '2020-08-27' })

class CreatePaymentIntentController {
  async handle(req: Request, res: Response): Promise<void> {
    const { currency, amount } = req.body

    const totalAmount = amount * 100

    try {
      // const customer = await stripe.customers.create({
      //   name: 'Pedrinho',
      //   email: 'acorda_pedrinho@mailinator.com'
      // });

      // const customerId = customer.id

      const ephemeralKey = await stripe.ephemeralKeys.create(
        { customer: customerId },
        { apiVersion: '2020-08-27' }
      );

      const params: Stripe.PaymentIntentCreateParams = {
        amount: totalAmount,
        customer: customerId,
        description: "Schedule an appointment",
        payment_method_types: ["card"],
        currency,
      }

      const paymentIntent: Stripe.PaymentIntent = await stripe.paymentIntents.create(
        params
      )

      res.json({
        clientSecret: paymentIntent.client_secret,
        publishableKey,
        customerId,
        ephemeralKey: ephemeralKey.secret
        
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