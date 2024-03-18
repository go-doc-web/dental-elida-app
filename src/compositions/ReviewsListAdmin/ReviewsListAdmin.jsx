import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '@/componets/Rating';
import Line from '@/componets/Line';

import { getReviewsAll } from '@/api/getReviews';
import formattedDate from '@/helpers/formatedDate';

import css from './ReviewsListAdmin.module.css';

export const SET_REVIEWS = 'SET_REVIEWS';

const ReviewsListAdmin = () => {
  const reviews = useSelector(state => state.reviewsReducer.reviews);
  const dispatch = useDispatch();

  console.log(reviews);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await getReviewsAll();
        // if (!data) {
        //   console.log('Error');
        // }
        dispatch({ type: 'SET_REVIEWS', payload: data });
      } catch (error) {
        // dispatch({ type: 'ERROR_REVIEWS', payload: data });
      }
    };
    fetchReviews();
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <Line className={css.line} />
      <ul className={css.list}>
        {/* {reviews && <p>Reviews empty</p>} */}
        {reviews &&
          reviews.map(({ _id: id, text, userName, lastName, rating, createdAt }) => {
            return (
              <li className={css.listItem} key={id}>
                <div className={css.itemWrap}>
                  <div className={css.bodyReviews}>
                    <h2 className={css.itemHeading}>{`${userName} ${lastName ? lastName : ''}`}</h2>
                    <span className={css.date}>{formattedDate(createdAt)}</span>
                    <Rating value={rating} />
                    <p className={css.itemText}>{`"${text}"`}</p>
                  </div>

                  <div>
                    {/* <div className={css.statusBlock}>
                      <span className={`${css.statusPanel} ${css.watingLabel}`}>Waiting</span>
                      <button type="button" className={`${css.btn} ${css.postBtn}`}>
                        Post
                      </button>
                    </div> */}
                    <div className={css.statusBlock}>
                      <span className={`${css.statusPanel} ${css.postedLabel}`}>Posted</span>
                      <button type="button" className={`${css.btn} ${css.deleteBtn}`}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
                <Line className={css.line} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ReviewsListAdmin;
