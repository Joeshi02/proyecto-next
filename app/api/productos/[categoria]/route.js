import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/app/firebase/config";

export async function GET(request, { params }) {

	try {
	
	const { categoria } = params
    console.log('CATEGORIA: ', categoria);
	
    const productosRef = collection (db, "productos")

    const q = categoria === 'all'
    ? productosRef
    :query(productosRef, where('category', '==', categoria))

    const querySnapshot = await getDocs(q)
    
    const docs = querySnapshot.docs.map(doc => doc.data())
    console.log('DOCS: ', docs);
	
    return NextResponse.json(docs)
	
	
	} catch(e) {
	
		return NextResponse.json({err: error.message})
	}

    

}