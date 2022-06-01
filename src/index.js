const stripe = require('stripe')('sk_test_51L3QSOKfUaT73IIiW8gJhdxUzt8JqesxOWXxJyvsbfVNM8RYTaA6aSwqMRlblqzQlA9r8qpkFeGCCz3SGeOutCeJ00vtWJ0dnT');
// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

app.post('/payment-sheet', async (req, res) => {
  // Use an existing Customer ID if this is a returning customer.
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    {customer: customer.id},
    {apiVersion: '2020-08-27'}
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'eur',
    customer: customer.id,
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey: 'pk_test_51L3QSOKfUaT73IIi6UVCw15m9eLw79iUmcxvAC19UE3Qlv2qz6FsyH4VwbHRIIOhdzaNetNypjSKC2WbprNigURj00ExLlYjKh'
  });
});