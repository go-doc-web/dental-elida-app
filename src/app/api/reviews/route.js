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

    return Response.json({ status: 200, data });
  } catch (error) {
    console.log(error.message);
  }
}

export async function PUT(request) {
  const { _id, isModerated } = await request.json();

  try {
    await dbConnect();
    const updatedReview = await Review.findByIdAndUpdate(_id, { isModerated }, { new: true });

    if (!updatedReview) {
      const errorResponse = new Response(JSON.stringify({ error: 'Review not found' }), {
        status: 404,
      });
      return errorResponse;
    }
    return Response.json({ status: 200, data: updatedReview });
  } catch (error) {
    console.log(error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
