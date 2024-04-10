import Image from 'next/image';

import close from '@/assets/icons/close.svg';

import css from './Modal.module.css';

function Modal({ closeModal, children, title }) {
  return (
    <div className={css.modalBackdrop}>
      <div className={css.modalContent}>
        <button className={css.modalClose} onClick={closeModal}>
          x
          {/* <Image
            src={close}
            alt={'close'}
            width={14}
            height={14}
            className={css.closeIcon}
            priority={true}
          /> */}
        </button>
        <h2 className={css.title}>{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default Modal;
