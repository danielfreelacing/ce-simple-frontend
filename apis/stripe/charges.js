import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

async function CreateStripeSession(req, res) {
    const { amount } = req.body;


    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100),
            currency: 'INR',
            payment_method_types: ['card'],
            // payment_method: paymentMethodId,
            // confirm: true,
        });

        // const paymentIntentId = paymentIntent.id;
        // const retrievedPaymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
        // const paymentIntentStatus = retrievedPaymentIntent.status;

        // if (paymentIntentStatus === 'requires_action') {
        //     return res.status(200).json({ client_secret: retrievedPaymentIntent });
        // } else if (paymentIntentStatus === 'succeeded') {
        //     // If the payment succeeded, return a success message to the client-side code
        //     return res.status(200).json({ message: 'Payment succeeded!' });
        // } else {
        //     // If the payment failed, return an error message to the client-side code
        //     return res.status(400).json({ error: 'Payment failed.' });
        // }

        // const paymentMethod = await stripe.paymentMethods.retrieve(paymentMethodId);

        res.status(200).json({ success: paymentIntent });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}
export default CreateStripeSession;
