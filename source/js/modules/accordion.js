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

if (accordionButtons) {
  accordionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      switchAccordion(button.parentElement);

      if (accordions) {
        accordions.forEach((element) => {
          if (element !== button.parentElement) {
            element.classList.remove('accordion--open');
            element.classList.add('accordion--closed');
          }
        });
      }
    });
  });
}
