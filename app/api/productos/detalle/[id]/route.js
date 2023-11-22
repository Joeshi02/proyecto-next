import { doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";
import { db } from "@/app/firebase/config";


export async function GET (request, {params}){
    const { id } = params;
    
    const docRef = doc(db, 'productos', id)

    const docSnapshot = await getDoc(docRef)

    return NextResponse.json(docSnapshot.data())
    
}