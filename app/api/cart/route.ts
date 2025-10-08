import { NextResponse } from "next/server";

const API_BASE_URL = process.env.BACKEND_API_URL!; // e.g. https://api.example.com

export async function POST(req: Request) {

    try {

        const body = await req.json();

        console.log("body >> ", body);

        return NextResponse.json({
            msg:"Test add item to cart"
        });
        
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to add to cart" },
            { status: 500 }
        );
    }

}