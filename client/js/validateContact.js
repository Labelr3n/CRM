export const validateClientContact = (contactType, contactInput) => {
  const writeValue = document.getElementById('writeName'),
        onlyNumbers = /[^0-9]+$/g,
        onlyEmail = /[^a-zA-Z|@|.]+$/g;

  const onInputValue = input => {
    input.addEventListener('input', () => {
      input.style.borderColor = 'var(--color-grey-siutC8C5)';
      writeValue.textContent = '';
    });

    input.oncut = input.oncopy = input.onpaste = () => {
      input.style.borderColor = 'var(--color-grey-siutC8C5)';
      writeValue.textContent = '';
      }
  }

  const showErrorMessage = (message, block, input) => {
    block.textContent = message;
    input.style.borderColor = 'var(--color-burnt-siennaF06A)'
  }

  onInputValue(contactInput);

  if (!contactInput.value) {
    showErrorMessage('Заполните все поля контактов', writeValue, contactInput);
    return false
  }

  switch (contactType.innerHTML) {
    case 'Телефон':
      if (onlyNumbers.test(contactInput.value)) {
        showErrorMessage('Допустимы только цифры', writeValue, contactInput);
        return false
      } else if (contactInput.value.length != 11) {
        showErrorMessage('Номер должен состоять из 11 цифр!', writeValue, contactInput);
        return false
      };
      return true
    case 'Email':
      if (onlyEmail.test(contactInput.value)) {
        showErrorMessage('Неправильный email', writeValue, contactInput);
        return false
      };
      return true
    default:
      return true;
  }
}
