import React, { useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';


export default function StripeTest() {
    const [loading, setLoading] = useState(false);
    const stripe = useStripe();
    const elements = useElements();


    const submitHandler = async () => {
        // Use the Stripe API to create a payment method
        const response = await fetch(`/api/stripe/charges`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount: parseFloat(orderAmount).toFixed(2) })
            })
        const paymentData = await response.json();


        // submit payment details
        const result = await stripe.confirmCardPayment(paymentData.success.client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                // billing_details: {
                //     name: shipingInfo?.firstName + ' ' + shipingInfo?.lastName,
                //     email: shipingInfo?.email,
                //     phone: shipingInfo?.phone,
                //     address: {
                //         line1: shipingInfo?.address,
                //         line2: shipingInfo?.appartment,
                //         city: shipingInfo?.city,
                //         // state: 'CA',
                //         postal_code: shipingInfo?.pincode,
                //         country: 'UK',
                //     },
                // },
            },
        });

        console.log(result);
    }

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     // Handle payment submission here
    //     if (!stripe || !elements) {
    //         return;
    //     }

    //     // Create a payment method
    //     const cardNumberElement = elements.getElement(CardNumberElement);
    //     const cardExpiryElement = elements.getElement(CardExpiryElement);
    //     const cardCvcElement = elements.getElement(CardCvcElement);
    //     console.log(cardExpiryElement);

    //     const { error, paymentMethod } = await stripe.createPaymentMethod({
    //         type: 'card',
    //         card: {
    //             number: cardNumberElement,
    //             exp_month: cardExpiryElement,
    //             exp_year: cardExpiryElement,
    //             cvc: cardCvcElement,
    //         },
    //     });
    //     if (error) {
    //         console.log('Error:', error);
    //     } else {
    //         console.log('Payment method:', paymentMethod);
    //     }
    // };


    return (
        <>
            <form className='w-96 py-4 mx-4 h-96' onSubmit={submitHandler}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#32325d',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#fa755a',
                            },
                        },
                        hidePostalCode: true,
                    }}
                />
                <div className="flex justify-end m-2">
                    <button type='submit' disabled={loading} className="px-6  py-2   text-white rounded btn btn-blue whitespace-nowrap bg-blue">
                        {loading ? 'Processing...' : 'Pay'}
                    </button>
                </div>
            </form>

            {/* <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="card-number" className="block text-gray-700 font-bold mb-2">
                        Card Number
                    </label>
                    <div className="border border-gray-300 p-2 rounded">
                        <CardNumberElement id="card-number" options={{ style: { base: { fontSize: '16px' } } }} />
                    </div>
                </div>
                <div className="flex mb-4">
                    <div className="w-1/2 pr-2">
                        <label htmlFor="card-expiry" className="block text-gray-700 font-bold mb-2">
                            Expiration Date
                        </label>
                        <div className="border border-gray-300 p-2 rounded">
                            <CardExpiryElement id="card-expiry" options={{ style: { base: { fontSize: '16px' } } }} />
                        </div>
                    </div>
                    <div className="w-1/2 pl-2">
                        <label htmlFor="card-cvc" className="block text-gray-700 font-bold mb-2">
                            CVC
                        </label>
                        <div className="border border-gray-300 p-2 rounded">
                            <CardCvcElement id="card-cvc" options={{ style: { base: { fontSize: '16px' } } }} />
                        </div>
                    </div>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Pay
                </button>
            </form> */}

        </>)

}
