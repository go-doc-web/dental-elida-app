export const getReviews = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/reviews`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    console.log(error.message);
    throw new Error('Failed to fetch reviews');
  }
};
