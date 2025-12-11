import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialiser Stripe avec la clé secrète
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

// Configuration des produits LISA
// À REMPLACER par vos vrais Price IDs depuis le dashboard Stripe
const PRODUCTS = {
  starter: {
    priceId: process.env.STRIPE_PRICE_STARTER || 'price_XXXXX_starter',
    name: 'LISA Starter',
    price: 99,
  },
  pro: {
    priceId: process.env.STRIPE_PRICE_PRO || 'price_XXXXX_pro',
    name: 'LISA Professionnel',
    price: 199,
  },
};

export async function POST(request: NextRequest) {
  try {
    const { plan, email, company } = await request.json();

    if (!plan || !PRODUCTS[plan as keyof typeof PRODUCTS]) {
      return NextResponse.json(
        { error: 'Plan invalide' },
        { status: 400 }
      );
    }

    const product = PRODUCTS[plan as keyof typeof PRODUCTS];
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://leova-website.vercel.app';

    // Créer une session Stripe Checkout
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [
        {
          price: product.priceId,
          quantity: 1,
        },
      ],
      customer_email: email,
      metadata: {
        company: company || '',
        plan: plan,
      },
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/#pricing`,
      locale: 'fr',
      billing_address_collection: 'required',
      // Période d'essai gratuite (optionnel)
      // subscription_data: {
      //   trial_period_days: 14,
      // },
    });

    return NextResponse.json({ 
      sessionId: session.id,
      url: session.url 
    });

  } catch (error: any) {
    console.error('Erreur Stripe:', error);
    return NextResponse.json(
      { error: error.message || 'Erreur lors de la création du paiement' },
      { status: 500 }
    );
  }
}


