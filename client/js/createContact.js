import { svgDelete } from "./svg.js";

export const createContactItem = () => {
  const contact = document.createElement('div'),
        contactType = document.createElement('div'),
        contactName = document.createElement('button'),
        contactList = document.createElement('ul'),
        contactPhone = document.createElement('li'),
        contactVk = document.createElement('li'),
        contactFb = document.createElement('li'),
        contactEmail = document.createElement('li'),
        contactOther = document.createElement('li'),
        contactInput = document.createElement('input'),
        contactDelete = document.createElement('button'),
        contactDeleteTooltip = document.createElement('span');

        // class
        contact.classList.add('contact');
        contactDeleteTooltip.classList.add('contact-tooltip', 'site-tooltip');
        contactType.classList.add('contact__type');
        contactName.classList.add('contact__name');

        contactList.classList.add('contact__list', 'list-reset');
        contactPhone.classList.add('contact__item');
        contactVk.classList.add('contact__item');
        contactFb.classList.add('contact__item');
        contactEmail.classList.add('contact__item');
        contactOther.classList.add('contact__item');
        contactInput.classList.add('contact__input');
        contactDelete.classList.add('contact__delete', 'btn-reset');

  contactName.textContent = 'Телефон';
  contactDeleteTooltip.textContent = 'Удалить контакт';
  contactPhone.textContent = 'Телефон';
  contactVk.textContent = 'VK';
  contactFb.textContent = 'Facebook';
  contactEmail.textContent = 'Email';
  contactOther.textContent = 'Другое';
  contactInput.textContent = 'Введите данные контакта';
  contactInput.type = 'text';
  contactDelete.innerHTML = svgDelete;

  contactDelete.addEventListener('click', (e) => {
    e.preventDefault();
    contact.remove();
    document.querySelector('.modal__btn-contact').classList.add('modal__btn-contact--active');
  })

  contactName.addEventListener('click', (e) => {
    e.preventDefault();
    contactList.classList.toggle('contact__list--active');
    contactName.classList.toggle('contact__list--active');
  })

  contactType.addEventListener('mouseleave', () => {
    contactList.classList.remove('contact__list--active');
    contactName.classList.remove('contact__list--active');
  })

  const setType = (type) => {
    type.addEventListener('click', () => {
      contactName.textContent = type.textContent;
      contactList.classList.remove('contact__list--active');
      contactName.classList.remove('contact__list--active');
    })
  }

  const typesArray = [contactEmail, contactFb, contactVk, contactPhone, contactOther];

  for (const type of typesArray) {
    setType(type);
  }

  contactDelete.append(contactDeleteTooltip);
  contact.append(contactType, contactInput, contactDelete);
  contactType.append(contactName, contactList);
  contactList.append(contactPhone, contactEmail, contactVk, contactFb, contactOther);

  return {
    contact,
    contactName,
    contactInput,
    contactDelete
  }
}
