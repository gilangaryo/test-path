'use client'

import Link from 'next/link';

export default function CartPage() {
    const cart = [
        { name: 'Case Study Qatar', price: 15, quantity: 1, image: '/img/qatar.png' },
    ];

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-4">MY CART</h1>
            <div className="flex justify-between">
                <div>
                    {cart.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 mb-4">
                            <div>
                                <p className="font-semibold">{item.name}</p>
                                <p>${item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="border p-6 rounded w-1/3">
                    <h2 className="font-bold text-lg mb-2">ORDER SUMMARY</h2>
                    <p>Total: $15</p>
                    <Link href="/checkout">
                        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded w-full">Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
