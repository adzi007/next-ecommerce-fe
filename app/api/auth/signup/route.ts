import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"

export async function POST(req: Request) {

    try {

        const { name, email, password } = await req.json()        

        if (!email || !password) {
            return NextResponse.json({ error: "Missing email or password" }, { status: 400 })
        }

        const existingUser = await prisma.user.findUnique({ where: { email } })

        // console.log("existingUser >>> ", existingUser);
        

        if (existingUser) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            },
        })

        return NextResponse.json({ user })

        // return NextResponse.json({ msg:"test register user" })
        
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
    
}