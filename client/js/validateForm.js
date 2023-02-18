export const validateClientForm = () => {
  const userName = document.getElementById('floatingName'),
        userSurname = document.getElementById('floatingSurname'),
        userLastname = document.getElementById('floatingLastname'),
        unacceptableLetter = document.getElementById('unacceptableLetter'),
        writeName = document.getElementById('writeName'),
        writeSurname = document.getElementById('writeSurname'),
        writeLastname = document.getElementById('writeLastname'),
        requiredValue = document.getElementById('requiredValue'),
        validateArray = [unacceptableLetter, writeName, writeSurname, writeLastname, requiredValue],
        regexp = /[^а-яА-ЯёЁ]+$/g;

        const onInputValue = input => {
          input.addEventListener('input', () => {
            input.style.borderColor = 'var(--color-grey-siutC8C5)';
            for (const item of validateArray) {
              item.textContent = '';
            }
          });

          input.oncut = input.oncopy = input.onpaste = () => {
            input.style.borderColor = 'var(--color-grey-siutC8C5)';
            for (const item of validateArray) {
              item.textContent = '';
            }
          };

          input.onchange = () => {
            input.style.borderColor = 'var(--color-grey-siutC8C5)';

            if (userSurname.value && userName.value  && userLastname.value) {
              for (const item of validateArray) {
                item.textContent = '';
              }
            }
          }
        };

        onInputValue(userName);
        onInputValue(userSurname);
        onInputValue(userLastname);

        const checkRequiredName = (input, message, name) => {
          if (!input.value) {
            input.style.borderColor = 'var(--color-burnt-siennaF06A)';
            message.textContent = `Введите ${name.toLowerCase()} клиента!`;
            return false
          } else {
            message.textContent = '';
          }
          return true;
        }

        const checkByRegexp = (input, regexp) => {
          if (regexp.test(input.value)) {
            input.style.borderColor = 'var(--color-burnt-siennaF06A)';
            unacceptableLetter.textContent = `Недопустимые символы`;
            return false
          }
          return true;
        }

        if(!checkRequiredName(userSurname, writeSurname, 'Фамилию')) { return false }
        if(!checkRequiredName(userName, writeName, 'Имя')) { return false }
        if(!checkRequiredName(userLastname, writeLastname, 'Отчество')) { return false }
        if(!checkByRegexp(userName, regexp)) { return false }
        if(!checkByRegexp(userSurname, regexp)) { return false }
        if(!checkByRegexp(userLastname, regexp)) { return false }

        return true;

}
