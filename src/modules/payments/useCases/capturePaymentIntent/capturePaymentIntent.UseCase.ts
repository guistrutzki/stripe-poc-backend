import Stripe from 'stripe';

const secretKey = process.env.SECRET_KEY!

const stripe = new Stripe(secretKey, { apiVersion: '2020-08-27' })

interface ICapturePaymentIntent {
  paymentIntentId: string
}

export class CapturePaymentIntentUseCase {
  async execute({ paymentIntentId }: ICapturePaymentIntent) {
    const paymentIntent = await stripe.paymentIntents.capture(paymentIntentId)
    return paymentIntent
  }
}