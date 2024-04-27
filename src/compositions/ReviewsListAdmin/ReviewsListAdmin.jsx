import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '@/componets/Rating';
import Line from '@/componets/Line';

// import { getReviewsAll } from '@/api/requests/getReviews';
import { updateReview } from '@/api/requests/updateReview';
import formattedDate from '@/helpers/formatedDate';

import css from './ReviewsListAdmin.module.css';

export const SET_REVIEWS = 'SET_REVIEWS';

const ReviewsListAdmin = () => {
  const reviews = useSelector(state => state.reviews.items);
  const dispatch = useDispatch();

  const [loading, setIsLoading] = useState(false);

  const handleUpdateReview = async ({ _id, isModerated }) => {
    setIsLoading(true);
    try {
      if (!_id) {
        throw new Error('Review ID is missing');
      }
      // Отправляем запрос на обновление отзыва
      const { data } = await updateReview({ _id, isModerated });
      console.log('res', data);
      dispatch({ type: 'PUT_REVIEWS', payload: data });

      // Обновляем состояние отзыва или делаем другие необходимые действия после успешного обновления
      // Можете использовать Redux для обновления списка отзывов
    } catch (error) {
      // Обрабатываем ошибку
      console.error('Error updating review:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   const fetchReviews = async () => {
  //     try {
  //       const { data } = await getReviewsAll();
  //       // if (!data) {
  //       //   console.log('Error');
  //       // }

  //       dispatch({ type: 'SET_REVIEWS', payload: data.data });
  //     } catch (error) {}
  //   };
  //   fetchReviews();
  // }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <Line className={css.line} />
      <ul className={css.list}>
        {/* {reviews && <p>Reviews empty</p>} */}
        {reviews &&
          reviews.map(({ _id, text, userName, lastName, rating, createdAt, isModerated }) => {
            return (
              <li className={css.listItem} key={_id}>
                <div className={css.itemWrap}>
                  <div className={css.bodyReviews}>
                    <h2 className={css.itemHeading}>{`${userName} ${lastName ? lastName : ''}`}</h2>
                    <span className={css.date}>{formattedDate(createdAt)}</span>
                    <Rating value={rating} />
                    <p className={css.itemText}>{`"${text}"`}</p>
                  </div>

                  <div>
                    {isModerated ? (
                      <div className={css.statusBlock}>
                        <span className={`${css.statusPanel} ${css.postedLabel}`}>Posted</span>
                        <button
                          onClick={() => handleUpdateReview({ _id, isModerated: false })}
                          type="button"
                          className={`${css.btn} ${css.deleteBtn}`}
                        >
                          Delete
                        </button>
                      </div>
                    ) : (
                      <div className={css.statusBlock}>
                        <span className={`${css.statusPanel} ${css.watingLabel}`}>Waiting</span>
                        <button
                          onClick={() => handleUpdateReview({ _id, isModerated: true })}
                          type="button"
                          className={`${css.btn} ${css.postBtn}`}
                        >
                          Post
                        </button>
                      </div>
                    )}
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
