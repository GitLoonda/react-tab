// eslint-disable-next-line react/prop-types
function Modal({ offModal }) {

  const setModal = offModal;

  return (
    <div className='modal'>
      <div className="modal-content">
        <h2>Modal</h2>
        <p>모달창 입니다.</p>
      </div>
      <button onClick={setModal}>모달창 닫기</button>
    </div>
  )
}

export default Modal