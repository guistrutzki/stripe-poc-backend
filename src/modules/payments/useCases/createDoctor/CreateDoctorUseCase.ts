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
        tos_acceptance: {
          date: Math.floor(Date.now() / 1000),
          ip: '8.8.8.8'
        },
        type: 'express',
        capabilities: {
          card_payments: { requested: true },
          transfers: { requested: true },
        },
        business_type: 'individual',
        business_profile: { 
          product_description: 'Medical appointments',
          name:  'Clínica de Teste Express',
          support_email: 'clinica@suporte.com',
          mcc: '8099' // medical_services
        },
        individual: {
          verification: {
            document: {
              front: 'file_identity_document_success',
            }
          },
          email: 'juliano123@mailinator.com',
          address: {
            city: 'Pelotas',
            state: 'Rio Grande do Sul',
            postal_code: '96077570',
            line1: 'Rua Um, 465',
            line2: 'AP 1010',
            country: 'BR'
          },
          first_name: 'Carlos',
          last_name: 'Nunes',
          gender: 'male',
          phone: "000 000 0000",
          political_exposure: 'none',
          dob: {
            day: 10,
            month: 10,
            year: 1995
          },
          id_number: '000000000',
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
        },
      });

      return {account}

    } catch (err) {
      const error = err as Error
      throw new Error(error.message)
    }
  }

}