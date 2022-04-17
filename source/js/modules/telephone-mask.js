const phoneInputs = document.querySelectorAll('input[data-tel-input]');
const FIRST_SYMBOLS = '+7(';

const getInputNumbersValue = (input) => {
  return input.value.replace(/\D/g, '');
};

const onPhoneInput = (evt) => {
  const input = evt.target;
  const inputNumbersValue = getInputNumbersValue(input);
  const selectionStart = input.selectionStart;
  let formattedInputValue = '';

  if (!inputNumbersValue) {
    input.value = '';
  }

  if (input.value.length !== selectionStart) {
    if (evt.data && /\D/g.test(evt.data)) {
      input.value = inputNumbersValue;
    }
  }

  if (inputNumbersValue[0] === '9') {
    inputNumbersValue = '7' + inputNumbersValue;
  }
  formattedInputValue = input.value = FIRST_SYMBOLS + '';
  if (inputNumbersValue.length > 1) {
    formattedInputValue += inputNumbersValue.substring(1, 4);
  }
  if (inputNumbersValue.length >= 5) {
    formattedInputValue += ')' + inputNumbersValue.substring(4, 7);
  }
  if (inputNumbersValue.length >= 8) {
    formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
  }
  if (inputNumbersValue.length >= 10) {
    formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
  }

  input.value = formattedInputValue;
};

const onPhoneKeyDown = (evt) => {
  const inputValue = evt.target.value;
  if (evt.keyCode === 8 && inputValue.length === 3) {
    evt.target.value = FIRST_SYMBOLS;
  }
};

for (let phoneInput of phoneInputs) {
  phoneInput.addEventListener('keydown', onPhoneKeyDown);
  phoneInput.onfocus = function () {
    if (this.value === '') {
      this.value = FIRST_SYMBOLS;
    }
  };

  phoneInput.addEventListener('input', onPhoneInput, false);
}
