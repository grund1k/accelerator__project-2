const openElements = document.querySelectorAll('.is-active');

openElements.forEach((openElement) => {
  openElement.classList.remove('is-active');
});
