import Stripe from 'stripe';

const secretKey = process.env.SECRET_KEY!
const publishableKey = process.env.PUBLISHABLE_KEY!
const customerId = 'cus_LmjU6zgMsaYIms'

const stripe = new Stripe(secretKey, { apiVersion: '2020-08-27' })

interface IPaymentIntent {
  currency: string
  amount: number
}

class CreatePaymentIntentUseCase {
  async execute({ amount, currency }: IPaymentIntent) {

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
        capture_method: 'manual',
        payment_method_types: ["card"],
        currency,
      }

      const paymentIntent: Stripe.PaymentIntent = await stripe.paymentIntents.create(
        params
      )

      return {
        clientSecret: paymentIntent.client_secret,
        publishableKey,
        customerId,
        ephemeralKey: ephemeralKey.secret
      }
      
    } catch (err) {
      const error = err as Error
      throw new Error(error.message)
    }
  }
}

export { CreatePaymentIntentUseCase }