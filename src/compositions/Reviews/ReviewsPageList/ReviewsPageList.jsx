import ReviewsList from '../ReviewsList';
import css from './ReviewsPageList.module.css';

const getReviews = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/reviews`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const ReviewsPageList = async () => {
  const data = await getReviews();

  return (
    <ReviewsList data={data} />
    // <>
    //   <ul className={css.list}>
    //     {data &&
    //       data.map(({ _id: id, text, userName, lastName, rating, createdAt }) => {
    //         return (
    //           <li className={css.listItem} key={id}>
    //             <h2 className={css.itemHeading}>{`${userName} ${lastName ? lastName : ''}`}</h2>
    //             <span className={css.date}>{formattedDate(createdAt)}</span>
    //             <Rating value={rating} />
    //             <p className={css.itemText}>{`"${text}"`}</p>
    //             <Line className={css.line} />
    //           </li>
    //         );
    //       })}
    //   </ul>
    // </>
  );
};

export default ReviewsPageList;
