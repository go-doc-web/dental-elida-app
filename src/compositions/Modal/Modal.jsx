function Modal({ closeModal, children }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '5rem',
          maxWidth: '30rem',
          height: '30rem',
          borderRadius: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: '25px',
          }}
        >
          <h2>Модальное окно</h2>
          <p style={{ marginTop: '20px' }}>{children}</p>
        </div>

        <button style={{ fontSize: '16px', marginTop: '20px' }} onClick={closeModal}>
          Закрыть
        </button>
      </div>
    </div>
  );
}

export default Modal;
