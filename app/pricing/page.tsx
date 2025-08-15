"use client";

import { useState } from "react";
import { coupons } from "../../lib/coupons";

type Item = {
  id: string; // e.g. "swedish-60"
  service: "Swedish" | "Deep Tissue";
  duration: 60 | 100;
  price: number;
};

function envNumber(name: string, fallback: number) {
  const v = process.env[name];
  const n = v ? Number.parseFloat(v) : NaN;
  return Number.isFinite(n) ? n : fallback;
}

const ITEMS: Item[] = [
  {
    id: "swedish-60",
    service: "Swedish",
    duration: 60,
    price: envNumber("NEXT_PUBLIC_PRICE_SWEDISH_60", 99.99),
  },
  {
    id: "swedish-100",
    service: "Swedish",
    duration: 100,
    price: envNumber("NEXT_PUBLIC_PRICE_SWEDISH_100", 139.99),
  },
  {
    id: "deep-60",
    service: "Deep Tissue",
    duration: 60,
    price: envNumber("NEXT_PUBLIC_PRICE_DEEP_60", 124.99),
  },
  {
    id: "deep-100",
    service: "Deep Tissue",
    duration: 100,
    price: envNumber("NEXT_PUBLIC_PRICE_DEEP_100", 169.99),
  },
];

export default function PricingPage() {
  const [selectedId, setSelectedId] = useState(ITEMS[0].id);
  const [code, setCode] = useState("");
  const [applied, setApplied] = useState<string | null>(null);

  const item = ITEMS.find((i) => i.id === selectedId)!;
  const discount = applied ? coupons[applied.toUpperCase()] ?? 0 : 0;
  const final = Math.max(0, item.price * (1 - discount));

  function applyCoupon(e: React.FormEvent) {
    e.preventDefault();
    const key = code.trim().toUpperCase();
    if (key && coupons[key] != null) setApplied(key);
    else setApplied(null);
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Pricing</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {ITEMS.map((i) => (
          <button
            key={i.id}
            onClick={() => setSelectedId(i.id)}
            className={`text-left border rounded-lg p-5 hover:shadow transition ${
              selectedId === i.id ? "border-halo-700 ring-2 ring-halo-200" : "border-gray-200"
            }`}
          >
            <div className="text-sm text-gray-500">{i.service}</div>
            <div className="text-xl font-semibold">
              {i.duration} minutes
            </div>
            <div className="mt-2 text-2xl font-bold">${i.price.toFixed(2)}</div>
          </button>
        ))}
      </div>

      <form onSubmit={applyCoupon} className="mt-8 flex gap-3">
        <input
          className="border rounded px-3 py-2 w-64"
          placeholder="Coupon code (optional)"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button className="bg-halo-700 text-white px-4 py-2 rounded hover:bg-halo-800">
          Apply
        </button>
        {applied && (
          <span className="self-center text-green-700">
            Applied: {applied} (−{Math.round(discount * 100)}%)
          </span>
        )}
      </form>

      <div className="mt-6 p-5 border rounded-lg">
        <div className="text-lg">
          <span className="font-medium">{item.service}</span>{" "}
          {item.duration} minutes
        </div>
        <div className="mt-2 text-gray-600">
          Base: ${item.price.toFixed(2)}
          {discount > 0 && (
            <>
              {" "}→ Discounted: <b>${final.toFixed(2)}</b>
            </>
          )}
        </div>

        <div className="mt-4">
          <button className="bg-halo-700 text-white px-5 py-2 rounded hover:bg-halo-800">
            Checkout (coming soon)
          </button>
        </div>
      </div>

      <p className="mt-4 text-sm text-gray-500">
        Final cost may exclude gratuity and any applicable taxes/fees.
      </p>
    </div>
  );
}
