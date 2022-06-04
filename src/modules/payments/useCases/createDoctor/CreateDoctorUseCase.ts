import Stripe from 'stripe';

const secretKey = process.env.SECRET_KEY!

const stripe = new Stripe(secretKey, { apiVersion: '2020-08-27' })

interface IDoctor {
  email: string
  password: string
  type: string // 'individual' | 'company'
  firstName: string
  lastName: string
  address: string
  postalCode: string
  city: string
  state: string
  country: string // 'BR' | 'US'
  created: string
  businessName: String
  stripeAccountId: string
}

export class CreateDoctorUserCase {
  async execute() {
    try {
      const account = await stripe.accounts.create({
        country: 'BR',
        type: 'express',
        capabilities: {
          card_payments: { requested: true },
          transfers: { requested: true }
        },
        business_type: 'individual',
        business_profile: { product_description: 'Medical appointments' },
        individual: {
          email: 'fulano@mailinator.com',
          address: {
            city: 'Pelotas',
            country: 'BR',
            state: 'RS',
          },
          first_name: 'Fulano',
          last_name: 'Nunes',
          gender: 'male',
        },
        default_currency: 'BRL',
        external_account: {
          country: 'BR',
          currency: 'BRL',
          account_holder_name: 'Fulano Nunes',
          account_holder_type: 'individual',
          routing_number: '110-0000',
          account_number: '0001234',
          object: 'bank_account',
        }
        
      });

      return {account}

    } catch (err) {
      const error = err as Error
      throw new Error(error.message)
    }
  }

}