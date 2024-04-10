import { TfiClose } from 'react-icons/tfi';

import css from './Modal.module.css';

function Modal({ closeModal, children, title }) {
  return (
    <div className={css.modalBackdrop}>
      <div className={css.modalContent}>
        <button className={css.modalClose} onClick={closeModal}>
          <TfiClose />
        </button>
        <h2 className={css.title}>{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default Modal;
