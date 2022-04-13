const accordions = document.querySelectorAll('.footer__accordion');
const accordionButtons = document.querySelectorAll('.footer__accordion-button');

if (accordions) {
  accordions.forEach((element) => {
    element.classList.remove('footer__accordion--open');
    element.classList.add('footer__accordion--closed');
  });
}

const switchAccordion = (accordion) => {
  if (accordion.classList.contains('footer__accordion--open')) {
    accordion.classList.remove('footer__accordion--open');
    accordion.classList.add('footer__accordion--closed');
  } else if (accordion.classList.contains('footer__accordion--closed')) {
    accordion.classList.remove('footer__accordion--closed');
    accordion.classList.add('footer__accordion--open');
  }
};

if (accordionButtons) {
  accordionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      switchAccordion(button.parentElement);
    });
  });
}
