import dbConnect from '@/lib/db-connect';
import Review from '@/models/Reviews';

export async function GET() {
  try {
    await dbConnect();
    const data = await Review.find().sort({ createdAt: -1 });

    return Response.json(data);
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
