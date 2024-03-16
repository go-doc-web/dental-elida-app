import dbConnect from '@/lib/db-connect';
import Review from '@/models/Reviews';

export async function GET() {
  try {
    await dbConnect();
    const data = await Review.find();

    return Response.json(data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  } catch (error) {
    console.log(error.message);
  }
}
export async function POST(request) {
  const body = await request.json();

  try {
    await dbConnect();
    const data = await Review.create({ ...body });

    return Response.json(data);
  } catch (error) {
    console.log(error.message);
  }
}
