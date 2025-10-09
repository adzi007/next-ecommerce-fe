import { NextResponse } from "next/server";

const API_BASE_URL = process.env.BACKEND_API_URL!; // e.g. https://api.example.com

export async function POST(req: Request) {

    try {

        const body = await req.json();

        console.log("body >> ", body);

        // Forward to your real backend
        // const backendRes = await fetch(`${API_BASE_URL}/cart`, {
        // method: "POST",
        // headers: {
        //     "Content-Type": "application/json",
        // },
        // body: JSON.stringify(body),
        // });

        // const data = await backendRes.json();

        // return NextResponse.json(data, { status: backendRes.status });


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