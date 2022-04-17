import {sendData} from './api';

const forms = document.querySelectorAll('form[data-form]');
const userTelephoneInputs = document.querySelectorAll('input[data-tel-input]');
const userNameInputs = document.querySelectorAll('input[data-username-input]');
const formCheckboxes = document.querySelectorAll('input[data-checkbox-input]');

const TELEPHONE_REGEX = /(^\+7)\([0-9]{3}\)[0-9]{3}\-[0-9]{2}\-[0-9]{2}$/gm;
const TIMEOUT_FOR_VALIDATION = 5000;


const validateNameInput = (element) => {
  if (element.value === '') {
    element.setCustomValidity('Пожалуйста, введите имя');
  } else {
    element.setCustomValidity('');
  }

  element.reportValidity();
};

const validateTelephoneInput = (element) => {
  if (element.value === '') {
    element.setCustomValidity('Пожалуйста, введите номер телефона');
  } else if (!TELEPHONE_REGEX.test(element.value)) {
    element.setCustomValidity('Пожалуйста, введите номер телефона в формате +7(000)000-00-00');
  } else {
    element.setCustomValidity('');
  }

  element.reportValidity();
};

const validateChecoxInput = (element) => {
  if (!element.checked) {
    element.setCustomValidity('Пожалуйста, подтвердите согласие');
  } else {
    element.setCustomValidity('');
  }

  element.reportValidity();
};

const addValidationListeners = () => {
  for (let userNameInput of userNameInputs) {
    userNameInput.addEventListener('input', () => validateNameInput(userNameInput));
  }

  for (let userTelephoneInput of userTelephoneInputs) {
    userTelephoneInput.addEventListener('input', () => validateTelephoneInput(userTelephoneInput));
  }

  for (let formCheckbox of formCheckboxes) {
    formCheckbox.addEventListener('change', () => validateChecoxInput(formCheckbox));
  }
};

const showLoadAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'fixed';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.color = 'red';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'white';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, TIMEOUT_FOR_VALIDATION);
};


for (let form of forms) {
  addValidationListeners();

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
        () => showLoadAlert('Форма успешно отправлена'),
        () => showLoadAlert('Проверьте форму'),
        new FormData(evt.target)
    );
  });
}

export {addValidationListeners};
