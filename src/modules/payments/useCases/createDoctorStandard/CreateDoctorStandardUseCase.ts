import Stripe from 'stripe';

const secretKey = process.env.SECRET_KEY!

const stripe = new Stripe(secretKey, { apiVersion: '2020-08-27' })

export class CreateDoctorStandardUseCase {
  async execute() {
    try {
      const account = await stripe.accounts.create({
        type: 'standard'
      });

      const accountLink = await stripe.accountLinks.create({
        account: account.id,
        refresh_url: 'https://example.com/reauth',
        return_url: 'https://example.com/return',
        type: 'account_onboarding',
      });

      return { accountLink }

    } catch (err) {
      const error = err as Error
      throw new Error(error.message)
    }
  }

}