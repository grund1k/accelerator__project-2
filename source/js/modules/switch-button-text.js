const accordionButtons = document.querySelectorAll('.accordion__button');

const switchButtonText = (button) => {
  if (button.classList.contains('accordion__button--text')) {
    if (button.parentElement.classList.contains('is-active')) {
      button.textContent = 'Подробнее';
    } else {
      button.textContent = 'Свернуть';
    }
  } else {
    button.textContent = '';
  }
};

accordionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    switchButtonText(button);
  });
});
