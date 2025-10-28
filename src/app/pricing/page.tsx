'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Loader2 } from "lucide-react";
import { useRouter } from 'next/navigation';

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  polarPriceId: string | null;
}

const plans: Plan[] = [
  {
    name: "Free",
    price: "0",
    description: "Perfect for trying out the RAG chatbot",
    features: [
      "Basic RAG chatbot functionality",
      "Limited to 10 messages per day",
      "Public documents only",
      "Community support"
    ],
    polarPriceId: null
  },
  {
    name: "Pro",
    price: "9.99",
    description: "For individuals who need more power",
    features: [
      "Everything in Free",
      "Unlimited messages",
      "Private document uploads",
      "Priority support",
      "Custom embedding models"
    ],
    polarPriceId: process.env.NEXT_PUBLIC_POLAR_PRICE_ID_PRO || null
  },
  {
    name: "Enterprise",
    price: "49.99",
    description: "For teams and businesses",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Advanced analytics",
      "Custom models",
      "24/7 Support",
      "SLA guarantees"
    ],
    polarPriceId: process.env.NEXT_PUBLIC_POLAR_PRICE_ID_ENTERPRISE || null
  }
];

export default function PricingPage() {
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubscribe = async (priceId: string | null, planName: string) => {
    if (!priceId) {
      // For free plan, redirect to sign up
      router.push('/auth/signup');
      return;
    }

    try {
      setLoading(planName);
      setError(null);

      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout');
      }

      if (!data.checkoutUrl) {
        throw new Error('No checkout URL received');
      }

      // Redirect to Polar checkout
      window.location.href = data.checkoutUrl;
    } catch (err) {
      console.error('Error creating checkout:', err);
      setError(err instanceof Error ? err.message : 'Failed to create checkout');
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Simple, transparent pricing</h1>
        <p className="text-xl text-muted-foreground">
          Choose the plan that&apos;s right for you
        </p>
        {error && (
          <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-md">
            {error}
          </div>
        )}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card key={plan.name} className="p-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold">{plan.name}</h2>
              <div className="mt-4">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="mt-4 text-muted-foreground">{plan.description}</p>
            </div>

            <div className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              className="w-full" 
              onClick={() => handleSubscribe(plan.polarPriceId, plan.name)}
              variant={plan.name === "Pro" ? "default" : "outline"}
              disabled={loading !== null}
            >
              {loading === plan.name ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait...
                </>
              ) : (
                plan.price === "0" ? "Get Started" : "Subscribe"
              )}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
} 
