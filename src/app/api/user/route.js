import { NextResponse } from 'next/server';
import { tokenService } from './tokenService';

export async function POST(req) {
  console.log('req', req);
  try {
    const { token } = await req.json();

    const userData = await tokenService(token);

    return NextResponse.json(userData);
  } catch (error) {
    return NextResponse.error(new Error('Internal Server Error'), { status: 500 });
  }
}
