import { NextResponse } from 'next/server';
import registerService from './registerService';

export async function POST(req) {
  try {
    const { email, password, userName } = await req.json();
    const data = await registerService(email, password, userName);
    return NextResponse.json({ status: 200, data });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
