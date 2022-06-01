# First Steps

## Stripe

* Create a new Stripe account
* Enable Test Mode
* Go to Stripe [developer dashboard](https://dashboard.stripe.com/test/dashboard) and copy the `Publishable key` and `Secret key`
* Create a new customer and copy it's `id`. With that its possible to link a payment intent to a specific customer.
* Add these keys to the `.env.example` file and rename it to `.env`

## Run

* Run `yarn install` to install the dependencies
* Run `yarn dev` to run the server on `http://localhost:3000`
* If you want to change the customer, just update the const `customerId` in the `CreatePaymentController` file.