import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    try{
        const body = await req.json()
        const {id, email_addresses, first_name, image_url} = body?.data
        const email=email_addresses[0]?.email_address
        console.log('done', body)
    }catch(e){

    }
}