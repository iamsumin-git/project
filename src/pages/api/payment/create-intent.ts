import { Stripe } from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, total, listingID, reservationID } = req.body;

    let customer: any = await stripe.customers.list({ email, limit: 1 });

    if (customer.data.length > 0) {
      customer = customer.data[0];
    } else {
      customer = await stripe.customers.create({
        name,
        email,
        // additional info
      });
    }

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: 'usd',
      customer: customer.id,
      // automatic_payment_methods: {
      //   enabled: true,
      // },

      metadata: {
        listingID,
        reservationID,
      },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
