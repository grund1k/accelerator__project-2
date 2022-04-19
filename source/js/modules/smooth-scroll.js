const setSmoothsScroll = (anchors) => {
  for (let anchor of anchors) {
    anchor.addEventListener('click', (evt) => {
      evt.preventDefault();
      const id = anchor.getAttribute('href');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
};

export {setSmoothsScroll};
