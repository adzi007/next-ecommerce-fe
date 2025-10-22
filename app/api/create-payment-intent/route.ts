import { NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {

    try {

        const { amount, currency = "usd" } = await req.json();
        const intent = await stripe.paymentIntents.create({
            amount,
            currency,
        });
        return NextResponse.json({ clientSecret: intent.client_secret });
        
    } catch (error) {
        
        console.error("Internal Error:", error);
        // Handle other errors (e.g., network issues, parsing errors)
        return NextResponse.json(
        { error: `Internal Server Error: ${error}` },
        { status: 500 }
        );
    }

  
}