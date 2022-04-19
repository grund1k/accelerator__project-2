const accordions = document.querySelectorAll('.accordion');
const accordionButtons = document.querySelectorAll('.accordion__button');

if (accordions) {
  accordions.forEach((element) => {
    element.classList.remove('accordion--open');
    element.classList.add('accordion--closed');
  });
}

const switchAccordion = (accordion) => {
  if (accordion.classList.contains('accordion--open')) {
    accordion.classList.remove('accordion--open');
    accordion.classList.add('accordion--closed');
  } else if (accordion.classList.contains('accordion--closed')) {
    accordion.classList.remove('accordion--closed');
    accordion.classList.add('accordion--open');
  }
};

const changeButtons = (button) => {
  if (button.classList.contains('accordion__button--open')) {
    button.classList.remove('accordion__button--open');
    button.classList.add('accordion__button--closed');
  } else if (button.classList.contains('accordion__button--closed')) {
    button.classList.remove('accordion__button--closed');
    button.classList.add('accordion__button--open');
  }

  if (button.classList.contains('accordion__button--text')) {
    if (button.classList.contains('accordion__button--closed')) {
      button.textContent = 'Подробнее';
    } else if (button.classList.contains('accordion__button--open')) {
      button.textContent = 'Свернуть';
    }
  }
};

const setAccordionClickLogic = (button) => {
  switchAccordion(button.parentElement);
  changeButtons(button);
  if (accordions) {
    accordions.forEach((element) => {
      if (element !== button.parentElement) {
        element.classList.remove('accordion--open');
        element.classList.add('accordion--closed');
      }
    });
  }
};

if (accordionButtons) {
  accordionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      setAccordionClickLogic(button);
    });
  });
}
