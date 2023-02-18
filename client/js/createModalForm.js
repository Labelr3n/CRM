import { createContactItem } from "./createContact.js";
import { svgContactDefault, svgContactHover } from "./svg.js";

export const createClientsForm = () => {
  const modalTitle = document.createElement('h2'),
        modalClose = document.createElement('button'),
        form = document.createElement('form'),
        inputSurname = document.createElement('input'),
        inputName = document.createElement('input'),
        inputLastname = document.createElement('input'),
        labelSurname = document.createElement('label'),
        labelName = document.createElement('label'),
        labelLastname = document.createElement('label'),
        requareSurname = document.createElement('span'),
        requareName = document.createElement('span'),
        addContactBtn = document.createElement('button'),
        contactBtnSvgDefault = document.createElement('span'),
        contactBtnSvgHover = document.createElement('span'),
        saveBtn = document.createElement('button'),
        cancelBtn = document.createElement('button'),
        contactsBlock = document.createElement('div'),
        formFloatingSurname = document.createElement('div'),
        formFloatingName = document.createElement('div'),
        formFloatingLastname = document.createElement('div'),
        errorBlock = document.createElement('p'),
        unacceptableLetter = document.createElement('span'),
        writeName = document.createElement('span'),
        writeSurname = document.createElement('span'),
        writeLastname = document.createElement('span'),
        requiredValue = document.createElement('span'),
        requiredContacts = document.createElement('span');

        errorBlock.classList.add('modal__error');
        unacceptableLetter.id = 'unacceptableLetter';
        writeName.id = 'writeName';
        writeSurname.id = 'writeSurname';
        writeLastname.id = 'writeLastname';
        requiredValue.id = 'requiredValue';
        requiredContacts.id = 'requiredContacts';

      // class
      modalTitle.classList.add('modal__title');
      modalClose.classList.add('modal__close', 'btn-reset');

      form.classList.add('modal__form');
      formFloatingSurname.classList.add('form-floating');
      formFloatingName.classList.add('form-floating');
      formFloatingLastname.classList.add('form-floating');
      inputSurname.classList.add('modal__input');
      inputName.classList.add('modal__input');
      inputLastname.classList.add('modal__input');
      labelSurname.classList.add('modal__label');
      labelName.classList.add('modal__label');
      labelLastname.classList.add('modal__label');
      requareSurname.classList.add('modal__label');
      requareName.classList.add('modal__label');

      addContactBtn.classList.add('modal__btn-contact', 'modal__btn-contact--active');
      saveBtn.classList.add('modal__btn-save', 'btn-reset', 'site-btn');
      cancelBtn.classList.add('modal__btn-back', 'btn-reset');

      contactBtnSvgDefault.classList.add('btn-contact__svg', 'btn-contact__svg--default', 'btn-contact__svg--active');
      contactBtnSvgHover.classList.add('btn-contact__svg', 'btn-contact__svg--hover');
      contactsBlock.classList.add('modal__contact');

      labelSurname.for = 'floatingSurname';
      labelName.for = 'floatingName';
      labelLastname.for = 'floatingLastname';

      inputSurname.id = 'floatingSurname';
      inputName.id = 'floatingName';
      inputLastname.id = 'floatingLastname';

      inputSurname.type = 'text';
      inputName.type = 'text';
      inputLastname.type = 'text';

      modalTitle.textContent = 'Новый клиент';

      inputSurname.placeholder = 'Фамилия';
      inputName.placeholder = 'Имя';
      inputLastname.placeholder = 'Отчество';


      labelSurname.textContent = 'Фамилия';
      labelName.textContent = 'Имя';
      labelLastname.textContent = 'Отчество';

      addContactBtn.textContent = 'Добавить контакт';
      saveBtn.textContent = 'Сохранить';
      cancelBtn.textContent = 'Отмена';

      requareSurname.textContent = '*';
      requareName.textContent = '*';

      contactBtnSvgDefault.innerHTML = svgContactDefault;
      contactBtnSvgHover.innerHTML = svgContactHover;

  labelSurname.append(requareSurname);
  labelName.append(requareName);
  formFloatingSurname.append(inputSurname, labelSurname);
  formFloatingName.append(inputName, labelName);
  formFloatingLastname.append(inputLastname, labelLastname);
  errorBlock.append(writeName, writeSurname, writeLastname, requiredValue, unacceptableLetter, requiredContacts);
  contactsBlock.append(addContactBtn);
  form.append(
    formFloatingSurname,
    formFloatingName,
    formFloatingLastname,
    contactsBlock,
    errorBlock,
    saveBtn,
    cancelBtn
  );
  addContactBtn.append(contactBtnSvgDefault, contactBtnSvgHover);

  addContactBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const contactsItems = document.getElementsByClassName('contact');


    if (contactsItems.length < 9) {
      const contactItem = createContactItem();
      contactsBlock.prepend(contactItem.contact)
      contactsBlock.style.backgroundColor = 'var(--color-athens-grayF4F3)';
      if (contactsItems.length >= 5) {
        document.querySelector('.modal__content').style.top = '55%';
      } else {
        document.querySelector('.modal__content').style.top = '50%';
      }
    } else {
      const contactItem = createContactItem();
      contactsBlock.prepend(contactItem.contact);
      addContactBtn.classList.remove('modal__btn-contact--active');
    }

  })

  addContactBtn.addEventListener('mousemove', () => {
    contactBtnSvgDefault.classList.remove('btn-contact__svg--active');
    contactBtnSvgHover.classList.add('btn-contact__svg--active')
  })

  addContactBtn.addEventListener('mouseleave', () => {
    contactBtnSvgDefault.classList.add('btn-contact__svg--active');
    contactBtnSvgHover.classList.remove('btn-contact__svg--active')
  })

  return {
    form,
    modalClose,
    modalTitle,
    cancelBtn,
    inputName,
    inputSurname,
    inputLastname,
    labelName,
    labelSurname,
    labelLastname,
    contactsBlock,
    addContactBtn
  }
}
