import { NextResponse } from "next/server";
import categories from '@/constants/categories.json';

export async function GET() {
  return NextResponse.json(categories);
}
