import '../utils/focus-lock';

const modal = document.querySelector('.modal');
const modalCloseSections = document.querySelectorAll('[data-close-modal]');
const modalOpen = document.querySelector('[data-open-modal]');
const body = document.querySelector('.body');

const onEscKeydown = (evt) => {
  const isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

  if (isEscKey) {
    evt.preventDefault();
    closeModal();
  }
};

const openModal = (evt) => {
  evt.preventDefault();
  modal.classList.add('is-active');
  body.style.position = 'fixed';
  window.focusLock.lock('.modal.is-active');

  modalCloseSections.forEach((section) => {
    section.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', onEscKeydown);
};

const closeModal = () => {
  modal.classList.remove('is-active');
  body.style.position = 'relative';
  modalOpen.focus();
  window.focusLock.unlock();

  modalCloseSections.forEach((section) => {
    section.removeEventListener('click', closeModal);
  });

  document.removeEventListener('keydown', onEscKeydown);
};

modalOpen.addEventListener('click', (evt) => {
  openModal(evt);
});
