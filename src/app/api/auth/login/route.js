import { NextResponse } from 'next/server';
import { loginService } from './loginService';

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    const data = await loginService(email, password);
    // console.log(data);

    return NextResponse.json({ ...data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'An error occurred', status: 500 });
  }
}
