import { getProducts } from "@/service/products";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const products = await getProducts();
  console.log("a");

  return NextResponse.json({ products });
}
