import css from './ReviewsPage.module.css';
import Reviews from '@/compositions/Reviews';
import WriteReviews from '@/compositions/WriteReviews';

const ReviewsPage = () => {
  return (
    <div className={css.root}>
      <div className={css.wrapper}>
        <section className={css.reviews}>{<Reviews />}</section>
      </div>
    </div>
  );
};

export default ReviewsPage;
