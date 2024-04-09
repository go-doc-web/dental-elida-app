import Reviews from '@/compositions/Reviews';
import WriteReviews from '@/compositions/WriteReviews';
import css from './ReviewsPage.module.css';

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
