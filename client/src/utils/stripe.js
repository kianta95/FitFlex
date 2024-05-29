// Import the Stripe.js library
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with your publishable API key
const stripePromise = loadStripe('your_publishable_api_key');

// Export a function to create a payment intent
export const createPaymentIntent = async (amount, currency) => {
  // Fetch your backend API endpoint for creating a payment intent
  const response = await fetch('/api/create-payment-intent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      amount,
      currency,
    }),
  });

  // Parse the response JSON
  const data = await response.json();

  // Return the payment intent client secret
  return data.clientSecret;
};

// Export the stripePromise for use in your components
export default stripePromise;
