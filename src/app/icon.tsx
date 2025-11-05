import { NextResponse } from 'next/server';

export async function GET() {
  // Return a 404 if you don't have an actual icon to serve
  return new NextResponse(null, { status: 404 });
}