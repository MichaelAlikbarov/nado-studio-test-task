const modal = document.getElementById('modal');
const buttonOpenModal = document.getElementById('button-modal-open');
const buttonClouseModal = modal.querySelector('.modal__close');

const openModal = () => {
    modal.classList.add('modal_opened');
    document.addEventListener('keydown', handleEscCloseModal);
}

const closeModal = () => {
    modal.classList.remove('modal_opened');
    document.removeEventListener('keydown', handleEscCloseModal)
}

const handleEscCloseModal = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
}

buttonOpenModal.addEventListener('click', openModal);
buttonClouseModal.addEventListener('click', () => {
    closeModal();
})

modal.addEventListener('click', (event) => {
    if ( event.currentTarget === event.target) {
        closeModal();
    }
})
