import { getAlldata } from "@/app/libs/image-data";
import { NextResponse } from "next/server";

export async function GET(){
    const data = await getAlldata();
    return NextResponse.json(data);
}