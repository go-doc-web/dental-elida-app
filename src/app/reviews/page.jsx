import Line from '@/componets/Line';
import ReviewsPageContent from './ReviewsPageContent';
import css from './ReviewsPage.module.css';
//TODO Обработать Error
const ReviewsPage = () => {
  return (
    <>
      <div className={css.wrapper}>
        <section className={css.reviews}>
          <h1 className={css.reviewsTitle}>Verified Reviews</h1>
          <Line className={css.line} />
          <ReviewsPageContent />
        </section>
      </div>
    </>
  );
};

export default ReviewsPage;
