import { NextResponse } from 'next/server';
import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY || !process.env.NEXT_PUBLIC_BASE_URL) {
    throw new Error('Missing Stripe environment variables');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2023-10-16',
});

type CheckoutItem = {
    name: string;
    price: number;
    image: string;
    quantity: number;
};

export async function POST(req: Request) {
    const { items }: { items: CheckoutItem[] } = await req.json();

    // Validasi input
    if (
        !Array.isArray(items) ||
        items.some(
            (item) =>
                typeof item.name !== 'string' ||
                typeof item.price !== 'number' ||
                typeof item.image !== 'string' ||
                typeof item.quantity !== 'number'
        )
    ) {
        return NextResponse.json({ error: 'Invalid item format' }, { status: 400 });
    }

    // Gunakan base URL sesuai environment
    const baseUrl =
        process.env.NODE_ENV === 'development'
            ? 'https://test-path-mu.vercel.app'
            : process.env.NEXT_PUBLIC_BASE_URL;

    const successUrl = `${baseUrl}/success`;
    const cancelUrl = `${baseUrl}/cart`;

    console.log('✅ BASE URL:', baseUrl);
    console.log('🔁 Success URL:', successUrl);
    console.log('🔁 Cancel URL:', cancelUrl);

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: items.map((item) => {
                const imageUrl = item.image.startsWith('http')
                    ? item.image
                    : `${baseUrl}${item.image}`;

                console.log('🖼️ Image URL:', imageUrl);

                return {
                    price_data: {
                        currency: 'idr',
                        product_data: {
                            name: item.name,
                            images: [imageUrl],
                        },
                        unit_amount: item.price * 100,
                    },
                    quantity: item.quantity,
                };
            }),

            mode: 'payment',
            success_url: successUrl,
            cancel_url: cancelUrl,
        });

        return NextResponse.json({ id: session.id });
    } catch (error) {
        console.error('❌ Stripe Checkout Session Error:', error);

        const errorMessage =
            error instanceof Error ? error.message : 'Internal Server Error';
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
