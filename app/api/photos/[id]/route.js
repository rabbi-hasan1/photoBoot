import { getDataById } from "@/app/libs/image-data";
import { NextResponse } from "next/server";

export async function GET(_request, {params}) {
    const {id} = await params;
    const data = getDataById(id);
    return NextResponse.json(data);    
}