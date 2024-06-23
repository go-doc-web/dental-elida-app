import css from '../SectionOurServices.module.css';

const OrderNumber = ({ number }) => {
  const firstNumber = number > 0 && number < 10 ? 0 : null;
  return (
    <div>
      <span className={css.orderNumber}>
        {firstNumber}
        {number}
      </span>
    </div>
  );
};

export default OrderNumber;
