'use client'

import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutPage() {
    const handleCheckout = async () => {
        const res = await fetch('/api/checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                items: [
                    {
                        name: 'Case Study Qatar',
                        price: 15,
                        image: '/img/qatar.jpg',
                        quantity: 1,
                    },
                ],
            }),
        });

        const data = await res.json();

        console.log('Stripe session response:', data);

        if (!data.id) {
            alert('Gagal membuat sesi Stripe!');
            return;
        }

        const stripe = await stripePromise;
        await stripe?.redirectToCheckout({ sessionId: data.id });
    };


    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold mb-4">CHECKOUT</h1>
            <button onClick={handleCheckout} className="bg-black text-white px-4 py-2 rounded">
                Bayar Sekarang
            </button>
        </div>
    );
}
