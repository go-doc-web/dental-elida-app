import dbConnect from '@/lib/db-connect';
import Review from '@/models/Reviews';

import { checkRatingExistence } from './checkRatingExistence.js';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const sort = searchParams.get('sort');
  const status = searchParams.get('status');
  const rating = searchParams.get('rating');
  // const limit = searchParams.get('limit');
  const page = parseInt(searchParams.get('page')) || 1;
  const limit = parseInt(searchParams.get('limit')) || 10;

  try {
    if (page === 1 && limit === 10 && !sort && !status && !rating) {
      await dbConnect();
      const totalReviews = await Review.countDocuments({});
      const totalPages = Math.ceil(totalReviews / limit);
      const data = await Review.find({}).sort({ createdAt: -1 });
      return Response.json({ data, totalPages, page, totalReviews });
    }

    let query = {};
    let sortOptions = { createdAt: -1 };

    if (status && status !== 'all') {
      query.isModerated = status === 'posted' ? true : false;
    }
    if (rating && rating !== 'all') {
      query.rating = rating;
    }

    if (sort === 'old') {
      sortOptions = { createdAt: 1 };
    }

    await dbConnect();
    const totalReviews = await Review.countDocuments(query);
    const totalPages = Math.ceil(totalReviews / limit);

    const data = await Review.find(query)
      .sort(sortOptions)
      .skip((page - 1) * limit)
      .limit(limit);

    if (rating !== 'all') {
      const ratingExists = await checkRatingExistence(rating);
      if (!ratingExists) {
        return Response.json({
          status: 404,
          message: `No reviews found with rating ${rating}`,
        });
      }
    }

    if (data.length === 0) {
      return Response.json({ status: 404, message: 'No reviews found with specified filters' });
    }

    return Response.json({ data, totalPages, page, totalReviews });
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
