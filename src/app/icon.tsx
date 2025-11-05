import { NextResponse } from 'next/server';

const handler = async () => {
  // Return a 404 if you don't have an actual icon to serve
  return new NextResponse(null, { status: 404 });
};

export { handler as GET };
export default handler;