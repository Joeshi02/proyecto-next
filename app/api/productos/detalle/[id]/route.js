import { mockData } from "@/data/products";
import { NextResponse } from "next/server";

const sleep = (timer) => {
    return new Promise ((resolve) => setTimeout(resolve, timer))
}

export async function GET (request, {params}){
    const { id } = params;
    const dataDetail = mockData.find((item) => item.id === parseInt(id));
    await sleep(1000);
    
    return NextResponse.json(dataDetail)
}